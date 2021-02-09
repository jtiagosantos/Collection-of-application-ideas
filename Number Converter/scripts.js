let inputElement = document.querySelector('.input');
let outputElement = document.querySelector('.output');

let buttonElement = document.querySelector('.button-submit');
buttonElement.addEventListener('click', () => {
    let binaryNumber = inputElement.value;
    if(binaryNumber === "") {
        return swal("Please fill in the input field!", "", "warning");
    }else{
        binaryNumberArray = Array.from(binaryNumber);
        for(i of binaryNumberArray){
            if(i !== '0' && i !== '1'){
                return swal("Invalid binary number!", "", "error");
            }
        }
        outputElement.value = parseInt(binaryNumber, 2);
    }
})