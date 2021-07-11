var express = require('express');
var router = express.Router();

//app.use('/demo', blogRouter);

router.get('/01Periodic_Table', function(req, res, next) {
  res.render('Demo_Project/01Periodic_Table');
});

router.get('/02', function(req, res, next) {
  res.render('Demo_Project/02');
});

router.get('/03', function(req, res, next) {
  res.render('Demo_Project/03');
});

router.get('/04', function(req, res, next) {
  res.render('Demo_Project/04');
});
router.get('/05', function(req, res, next) {
  res.render('Demo_Project/05');
});
router.get('/06', function(req, res, next) {
  res.render('Demo_Project/06');
});

module.exports = router;
