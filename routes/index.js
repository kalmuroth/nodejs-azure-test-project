var express = require('express');
var router = express.Router();
var mongoClient = require("mongodb").MongoClient;

mongoClient.connect("mongodb://db-student-m2-iot-france:DXQpNMiPQ6olwG68S4NwOyngh65MVktLNBYJmeI0gR0MDzE9HWrlDSRWHkf3aw3BVFMMqKfac4X3ACDbaahtpw%3D%3D@db-student-m2-iot-france.mongo.cosmos.azure.com:10255/?ssl=true&retrywrites=false&maxIdleTimeMS=120000&appName=@db-student-m2-iot-france@", function (err, client) {
  client.close();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
