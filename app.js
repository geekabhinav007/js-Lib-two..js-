var elem = document.getElementById('canvas-container');
var params = { width: window.innerWidth, height: window.innerHeight };
var two = new Two(params).appendTo(elem);

var shapes = ['triangle', 'circle', 'rectangle'];