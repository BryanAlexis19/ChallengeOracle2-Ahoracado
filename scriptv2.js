//CAJAS GENERALES
var btnIniciar = document.getElementById("btnIniciar");
var btnNuevaPalabra = document.getElementById("btnNuevaPalabra");
var txtIngresePal = document.getElementById("txtIngresePal");
var btnGuardarPal = document.getElementById("btnGuardarPal");
var btnCancelarPal = document.getElementById("btnCancelarPal");
var canva = document.getElementById("figuraCanva");

//Draw the human silluete
pincel = canva.getContext("2d");

//Function to draw every line
const drawLine = (ctx, begin, end, width) => {
  ctx.strokeStyle = "#0A3871";
  if (width) {
    ctx.lineWidth = width;
  } else {
  }
  ctx.beginPath();
  ctx.moveTo(...begin);
  ctx.lineTo(...end);
  ctx.stroke();
  console.log("line drown");
};

//Function to draw the circunference
var drawCircle = (x, y, radio,color) => {
  pincel.fillStyle = color;
  pincel.beginPath();
  pincel.arc(x, y, radio, 0, 2 * 3.14);
  pincel.fill();
};

//Steps to draw the human
//Horca
drawLine(pincel, [20, 380], [280, 380], 4); //Base
drawLine(pincel, [80, 380], [80, 20], 4); //Pilar
drawLine(pincel, [78, 20], [240, 20], 4); //Techo
drawLine(pincel, [238, 20], [238, 60], 4); //Cuerda
//Cabeza
drawCircle(238, 92, 32, "#0A3871"); //Circulo exterior
drawCircle(238,92,28, "#FFFFFF"); //Circulo interior
//Tronco
drawLine(pincel, [238,124],[238,259],4);
//Brazos
drawLine(pincel,[238,124],[198,196],4);//Izquiero
drawLine(pincel,[238,124],[278,196],4);//Derecho
//Piernas
drawLine(pincel,[238,259],[198,331],4);//Izquierdo
drawLine(pincel,[238,259],[278,331],4);//Derecho




