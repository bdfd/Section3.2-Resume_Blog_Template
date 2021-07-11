var express = require('express');
var router = express.Router();

//app.use('/', indexRouter);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Index/Login', { layout: 'page_layout/Login_layout' });
});

router.get('/home', function(req, res, next) {
  res.render('Index/home', { layout: 'page_layout/Resume_layout' });
});

router.get('/work_exp', function(req, res, next) {
  res.render('Index/work_exp', { layout: 'page_layout/Resume_layout' });
});

router.get('/skill_list', function(req, res, next) {
  res.render('Index/skill_list', { layout: 'page_layout/Resume_layout' });
});

router.get('/blog', function(req, res, next) {
  res.render('Index/blog', { layout: 'page_layout/Resume_layout' });
});

router.get('/gallery', function(req, res, next) {
  res.render('Index/gallery', { layout: 'page_layout/Resume_layout' });
});

router.get('/demo', function(req, res, next) {
  res.render('Index/demo', { layout: 'page_layout/Resume_layout' });
});

router.get('/contact', function(req, res, next) {
  res.render('Index/contact', { layout: 'page_layout/Resume_layout' });
});

module.exports = router;
