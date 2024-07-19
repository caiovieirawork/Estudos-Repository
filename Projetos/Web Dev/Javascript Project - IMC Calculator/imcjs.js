   
    const calcular = document.querySelector('input#icalcular')

    function imc(){
        const nome = document.querySelector('input#inome').value;
        const altura = document.querySelector('input#ialtura').value;
        const peso = document.querySelector('input#ipeso').value;
        const resultados = document.querySelector('#resultados');
        

        if(nome !== '' && altura !== '' && peso !== '')
        {
            const calc = (peso / (altura * altura)).toFixed(1);

            if(calc < 18.5 ){

                resultados.textContent = `Olá ${nome}, seu IMC é de: ${calc} . Você está abaixo do peso`;

            } else if(calc <= 25){

                resultados.textContent = `Olá ${nome}, seu IMC é de: ${calc} . Você está com peso normal`;

            } else if(calc <= 30){

                resultados.textContent = `Olá ${nome}, seu IMC é de: ${calc} . Você está acima do peso`;

            } else if(calc <= 35){

                resultados.textContent = `Olá ${nome}, seu IMC é de: ${calc} . Você está com Obesidade de grau 1`;

            } else if(calc <= 40){

                resultados.textContent = `Olá ${nome}, seu IMC é de: ${calc} . Você está com Obesidade de grau 2`;

            } else{

                resultados.textContent = `Olá ${nome}, seu IMC é de: ${calc} . Você está com Obesidade de grau 3`;

            }

        }else {
            resultados.textContent = `!!! - Preencha todos os campos - !!!`;
        }
    }
    

    calcular.addEventListener('click', imc);


