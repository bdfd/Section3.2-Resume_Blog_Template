var express = require('express');
var router = express.Router();

//app.use('/project', projectRouter);

router.get('/01_hotprogrammingin2020', function (req, res, next) {
	res.render('Project/01_HotProgrammingin2020', {
		layout: 'page_layout/Project_layout',
	});
});

router.get('/02_2020WebNavigation', function (req, res, next) {
	res.render('Project/02_2020WebNavigation', {
		layout: 'page_layout/Project_layout',
	});
});

router.get('/03', function (req, res, next) {
	res.render('Project/03');
});

router.get('/04', function (req, res, next) {
	res.render('Project/04');
});

router.get('/05', function (req, res, next) {
	res.render('Project/05');
});

router.get('/06', function (req, res, next) {
	res.render('Project/06');
});

module.exports = router;
