var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('home', { title: 'Welcome to HouseGalore' });
});

router.get('/contact-us', function(req, res) {
  res.render('contactus', { title: 'Contact us' });
});

router.get('/products', function(req, res) {
  res.render('products', { title: 'Products' });
});

router.get('/engage', function(req, res) {
  res.render('engage', { title: 'Products' });
});

module.exports = router;
