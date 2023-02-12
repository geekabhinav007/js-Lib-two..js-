var elem = document.getElementById('canvas-container');
var params = { width: window.innerWidth, height: window.innerHeight };
var two = new Two(params).appendTo(elem);

var shapes = ['triangle', 'circle', 'rectangle'];

function generateShape() {
    var shape = shapes[Math.floor(Math.random() * shapes.length)];
    var colors = ['#FF0000', '#00FF00', '#0000FF'];
    var color = colors[Math.floor(Math.random() * colors.length)];
    var size = Math.floor(Math.random() * 50) + 10;
    var x = Math.floor(Math.random() * window.innerWidth);
    var y = Math.floor(Math.random() * window.innerHeight);
  
    if (shape === 'triangle') {
      var shape = two.makePolygon(x, y, size, 3);
    } else if (shape === 'circle') {
      var shape = two.makeCircle(x, y, size);
    } else {
      var shape = two.makeRectangle(x, y, size, size);
    }
  
    shape.fill = color;
    shape.noStroke();
    return shape;
  }

  function drawRandomShape() {
    var interval = Math.floor(Math.random() * 3000) + 2000; // Random interval between 2 to 5 seconds
    var shape = generateShape();
    two.add(shape);
    setTimeout(drawRandomShape, interval);
  }

  drawRandomShape();