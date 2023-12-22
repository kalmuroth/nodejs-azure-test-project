var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    const response = await axios.get('https://swapi.dev/api/people/');
    const data = response.data; // Store the response data
    res.render('index', { title: 'Star Wars Characters', data: data }); // Render your index view with data
  } catch (error) {
    console.error('Error calling API:', error);
    res.status(500).send('Error fetching data'); // Send an error response if there's an issue
  }
});

module.exports = router;
