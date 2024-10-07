// Capturar evento de submit do formulário
const form = document.querySelector('#imcForm');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number.parseFloat(inputPeso.value);
    const altura = Number.parseFloat(inputAltura.value);

    // Condições de validação
    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }
    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getIMC(peso, altura);
    const nivelImc = getNivelImc(imc);
    
    // Exibindo mensagem
    const msg = `Seu IMC é ${imc} (${nivelImc}).`;
    setResultado(msg, true);
});

// Função para determinar o nível de IMC
function getNivelImc(imc) {
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) {
        return nivel[5];
    } else if (imc >= 34.9) {
        return nivel[4];
    } else if (imc >= 29.9) {
        return nivel[3];
    } else if (imc >= 24.9) {
        return nivel[2];
    } else if (imc >= 18.5) {
        return nivel[1];
    } else {
        return nivel[0];
    }
}

// Função para calcular IMC
function getIMC(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

// Cria parágrafo
function criarP() {
    const p = document.createElement('p');
    return p;
}

// Função para setar o resultado
function setResultado(msg, isValid) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    const p = criarP();
    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }
    
    p.innerHTML = msg;
    resultado.appendChild(p);
}