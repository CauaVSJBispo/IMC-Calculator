alert('O calculo que você está prestes a realizar não define, de fato, seu tipo corporal. Em caso de qualquer insegurança adivinda deste teste, procure um profissional qualificado.')

function soNumeros(e){
    var number = e.which || e.keycode;
        if (number != 46 && number > 31 
        && (number < 48 || number > 57))
         return false;

      return true;
}


const altura = document.querySelector('#altura');
const peso = document.querySelector('#peso');
const resultado = document.querySelector('#resultado');


const calculoIMC = () => {
    if (altura.value !== '' && peso.value !== '') {
        const imc = (peso.value / (altura.value * altura.value)).toFixed(2)

        let classificacao = ''

        if (imc < 18.5){
            classificacao = 'Abaixo do peso'
        } else if (imc < 25){
            classificacao = 'Peso "normal"'
        } else if (imc < 30) {
            classificacao = 'Acima do peso'
        } else if (imc < 35){
            classificacao = 'Obesidade grau I'
        } else if (imc < 41){
            classificacao = 'Obesidade grau II'
        } else if (imc > 41){
            classificacao = 'Obesidade grau III'
        } else {
            classificacao = 'Digite um valor válido'
        }

        resultado.innerHTML = `Seu IMC é ${imc} (${classificacao})`
    }else {
        resultado.innerHTML = 'Preencha os campos'
    }
}