const calculaImc = () => {
    const altura = document.imcForm.elements["altura"].value;
    const peso = document.imcForm.elements["peso"].value;

    const imc = peso / (altura * altura);

    if(imc < 18.5){
        alert("Você está abaixo do peso");
    }
    else if(imc >= 18.5 && imc < 24.9){
        alert("Você está com o peso normal");
    }
    else if(imc >= 25.0 && imc < 29.9){
        alert("Você está com sobrepeso");
    }
    else if(imc >= 30.0 && imc < 39.9){
        alert("Você está com obesidade");
    }
    else if(imc >= 40.0){
        alert("Você está com obesidade grave");
    }
}