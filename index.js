let keys = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
};

document.addEventListener("keyup", drawKeyboard);
let cuadrito = document.getElementById("area_de_dibujo");
let papel = cuadrito.getContext("2d");
let x = 150;
let y = 150;

function draw(color, x_inicial, y_inicial, x_final, y_final, lienzo) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.lineWidth = 2;
  lienzo.moveTo(x_inicial, y_inicial);
  lienzo.lineTo(x_final, y_final);
  lienzo.stroke();
  lienzo.closePath();
}

function drawKeyboard(e) {
  let colorcito = "blue";
  let movimiento = 10;

  switch (e.keyCode) {
    case keys.UP:
      draw(colorcito, x, y, x, y - movimiento, papel);
      y = y - movimiento;
      break;
    case keys.DOWN:
      draw(colorcito, x, y, x, y + movimiento, papel);
      y = y + movimiento;
      break;
    case keys.LEFT:
      draw(colorcito, x, y, x - movimiento, y, papel);
      x = x - movimiento;
      break;
    case keys.RIGHT:
      draw(colorcito, x, y, x + movimiento, y, papel);
      x = x + movimiento;
      break;
    default:
      console.log("Otra tecla");
  }
}
