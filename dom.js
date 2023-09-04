const botaocalcular = document.querySelector("#btncalcular")
botaocalcular.addEventListener("click", function calcular(){
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const imc = peso / (altura * altura);
    let resultado= ""
    if (imc < 18.5) {
        resultado = "= Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado = " =Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        resultado = " =Sobrepeso";
    } else {
        resultado = " =Obesidade";
    
    }
    document.getElementById("resultado").innerHTML = "Resultado: " + (imc) + resultado
})
