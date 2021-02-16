let copyInput = document.querySelector('.copy-area input');
let buttonCopy = document.querySelector('.copy-area button');
let squareElement = document.querySelector('.square-up');

const updateValues = () => {
    squareElement.style.borderRadius = `${inputA.value}px ${inputB.value}px ${inputC.value}px ${inputD.value}px`;
    copyInput.value = `border-radius: ${inputA.value}px ${inputB.value}px ${inputC.value}px ${inputD.value}px;`;
}

let inputA = document.querySelector('.input-A');
inputA.addEventListener('input', () => {updateValues();});

let inputB = document.querySelector('.input-B');
inputB.addEventListener('input', () => {updateValues();});

let inputC = document.querySelector('.input-C');
inputC.addEventListener('input', () => {updateValues();});

let inputD = document.querySelector('.input-D');
inputD.addEventListener('input', () => {updateValues();});

buttonCopy.addEventListener('click', () => {
    copyInput.select();
    document.execCommand('copy');
    alert('Copiado para a área de transferência com sucesso!')
})