var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const azureFunctionUrl = 'https://function-trigger-run-master.azurewebsites.net/api/HttpTrigger/'; 
    const response = await axios.get(azureFunctionUrl, {
      params: {
        locationCityCountry: 'people' 
      }
    });

    const data = response.data;
    
    res.render('index', { title: 'Star Wars Characters', data: data });
  } catch (error) {
    res.status(500).send('Error calling Azure Function');
  }
});

module.exports = router;
