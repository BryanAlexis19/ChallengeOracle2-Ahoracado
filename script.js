//Cajas Generales
btnCopiar = document.getElementById("btnCopiar");
imgMuneco = document.querySelector(".muneco");
title1 = document.querySelector(".title-1");
title2 = document.querySelector(".title-2");

//Aparecer Caja de mensaje encriptado: display = flex;
var inputIngreso = document.getElementById("txtIngreso");
var mensajeEncriptado = document.getElementById("txtEncriptado");
const btnEncriptation = document
  .getElementById("btnEncriptation")
  .addEventListener("click", function (e) {
    e.preventDefault();
  });

const btnDesencriptation = document
  .getElementById("btnDesencriptation")
  .addEventListener("click", function (e) {
    e.preventDefault();
  });

//Get the event when pressing Encriptar button
const btnEncriptarHandler = (e) => {
  if (inputIngreso.value) {
    const encrypted = encriptar(inputIngreso.value);
    imgMuneco.style.display = "none";
    title1.style.display = "none";
    title2.style.display = "none";
    mensajeEncriptado.value = encrypted;
    mensajeEncriptado.style.display = "inline";
    btnCopiar.style.display = "inline";
    inputIngreso.value = "";
  } else {
    alert("Ingrese un texto a encriptar");
    imgMuneco.style.display = "inline";
    title1.style.display = "inline";
    title2.style.display = "inline";
    mensajeEncriptado.style.display = "none";
    btnCopiar.style.display = "none";
  }
};

//Function to crypt the entered message.
const encriptar = (stringEncriptado) => {
  let arrayCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptado = stringEncriptado.toLowerCase();
  for (let i = 0; i < arrayCodigo.length; i++) {
    if (stringEncriptado.includes(arrayCodigo[i][0])) {
      stringEncriptado = stringEncriptado.replaceAll(
        arrayCodigo[i][0],
        arrayCodigo[i][1]
      );
    }
  }
  return stringEncriptado;
};

//FUNCTION TO DECRYPT THE ENTERED MESSAGE
const btnDesencriptarHandler = (e) => {
  if (inputIngreso.value) {
    const encrypted = desencriptar(inputIngreso.value);
    imgMuneco.style.display = "none";
    title1.style.display = "none";
    title2.style.display = "none";
    mensajeEncriptado.value = encrypted;
    mensajeEncriptado.style.display = "inline";
    btnCopiar.style.display = "inline";
    inputIngreso.value = "";
  }else{
    alert("Ingrese un texto a desencriptar.");
    imgMuneco.style.display = "inline";
    title1.style.display = "inline";
    title2.style.display = "inline";
    mensajeEncriptado.style.display = "none";
    btnCopiar.style.display = "none";
  }
};

const desencriptar = (stringEncriptado) => {
  let arrayCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  stringEncriptado = stringEncriptado.toLowerCase();
  for (let i = 0; i < arrayCodigo.length; i++) {
    if (stringEncriptado.includes(arrayCodigo[i][1])) {
      stringEncriptado = stringEncriptado.replaceAll(
        arrayCodigo[i][1],
        arrayCodigo[i][0]
      );
    }
  }
  return stringEncriptado;
};


//FUNCTION TO COPY THE GENERATED TEXT
const btnCopiarHandler = (e) => {
  mensajeEncriptado.select();
  navigator.clipboard.writeText(mensajeEncriptado.value);
  mensajeEncriptado.value = "";
  alert("Mensaje Copiado");
};


//FUNCTION TO REVERSE ENCRYPTION
const btnReverseHandler = (e) => {
  if(mensajeEncriptado.value){
    inputIngreso.value = mensajeEncriptado.value;
    mensajeEncriptado.value = "";
    //Empty result area
    imgMuneco.style.display = "inline";
    title1.style.display = "inline";
    title2.style.display = "inline";
    mensajeEncriptado.style.display = "none";
    btnCopiar.style.display = "none";
  }
}
