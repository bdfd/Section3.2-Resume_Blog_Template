document.onkeydown = function () {
	var e = window.event || arguments[0];
	if (e.keyCode == 123) {
		alert(
			'请尊重劳动成果！请联系我bdfd2005@gmail.com \n 请返回 http://kelvin-chen-resume.tk/ 谢谢合作!'
		);
		return false;
	} else if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
		alert(
			'请尊重劳动成果！请联系我bdfd2005@gmail.com\n请返回 http://kelvin-chen-resume.tk/ 谢谢合作!'
		);
		return false;
	} else if (e.ctrlKey && e.keyCode == 85) {
		alert(
			'请尊重劳动成果！请联系我bdfd2005@gmail.com\n请返回 http://kelvin-chen-resume.tk/ 谢谢合作!'
		);
		return false;
	} else if (e.ctrlKey && e.keyCode == 83) {
		alert(
			'请尊重劳动成果！请联系我bdfd2005@gmail.com\n请返回 http://kelvin-chen-resume.tk/ 谢谢合作!'
		);
		return false;
	}
};
document.oncontextmenu = function () {
	alert(
		'请尊重劳动成果！请联系我bdfd2005@gmail.com\n请返回 http://kelvin-chen-resume.tk/ 谢谢合作!'
	);
	return false;
};
