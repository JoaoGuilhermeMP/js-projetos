const diminuirbtn = document.getElementById("diminuir-btn");
const resetarbtn = document.getElementById("resetar-btn");
const aumentarbtn = document.getElementById("aumentar-btn");
const contadorLabel = document.getElementById("contadorLabel");
let contador = 0;

diminuirbtn.onclick = function() {
    contador --;
    contadorLabel.textContent = contador;
}

resetarbtn.onclick = function() {
    contador = 0;
    contadorLabel.textContent = contador;
}

aumentarbtn.onclick = function() {
    contador ++;
    contadorLabel.textContent = contador;
}