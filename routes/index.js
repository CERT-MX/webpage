var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'ColScript' });
});

router.get('/alerts', function(req, res) {
  res.render('alerts/index', { title: 'Alerts' });
});

router.get('/consulta', function (req, res){
	var resu = [];
	var collection = req.db.collection('users');
      //Trae todos los documentos de la colección: "users"
      collection.find().toArray(function(err, results) {
        //Muestra los resultados en el navegador.
        res.send(results);
      });
});

module.exports = router;
