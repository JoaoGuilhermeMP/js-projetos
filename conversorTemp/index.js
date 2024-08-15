const contador = document.getElementById("textNumero");
const cTof = document.getElementById("paraF");
const fToc = document.getElementById("paraC");
const resultado = document.getElementById("resultado");
let temperatura;

function converter() {
    
    
    if(cTof.checked){
        temperatura = Number(contador.value);
        temperatura = temperatura * 9/5 + 32;
        resultado.textContent = temperatura.toFixed(1) + "°F";
    } else if (fToc.checked){
        temperatura = Number(contador.value);
        temperatura = (temperatura - 32) * (5/9);
        resultado.textContent = temperatura.toFixed(1) + "°C";
    } else {
        resultado.textContent = "Escolha para fazer uma conversão!";
    }

}

