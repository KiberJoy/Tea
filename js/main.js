document.getElementById("menu").onclick = function() {
	document.getElementById("hidden").style.display = 'block';
}
document.getElementById("close_hidden").onclick = function() {
	document.getElementById("hidden").style.display = 'none';
}
document.getElementById("show").onclick = function() {
	document.getElementById("button_drop").style.display = 'flex';
	document.getElementById("normal_header").style.display = 'none';
}
document.getElementById("default").onclick = function() {
	document.getElementById("normal_header").style.display = 'flex';
	document.getElementById("button_drop").style.display = 'none';
}