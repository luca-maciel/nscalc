function decimalToBinary(decimalNumber, stepByStep = false) {
    let binary = "";
    let output = "";
    if (stepByStep){
        window.alert(`Converting ${decimalNumber} to binary...`);
    }
    while (decimalNumber > 0) {
        binary += (decimalNumber % 2).toString();
        if (stepByStep) {
            output += `${decimalNumber} ÷ 2 = ${Math.floor(decimalNumber / 2)} | remainder = ${decimalNumber % 2}\n`;
            console.log(`${decimalNumber} ÷ 2 = ${Math.floor(decimalNumber / 2)} | remainder = ${decimalNumber % 2}`);
        }
        decimalNumber = Math.floor(decimalNumber / 2);
    }
    binary = binary.split("").reverse().join("");
    if(stepByStep){
        window.alert(`${output}\n${binary}`);
    }
    return binary.padStart(3, "0");
}

function decimalToOctal(decimalNumber, stepByStep = false) {
    let octal = "";
    let output = "";
    if (stepByStep) {
        console.log(`Converting number ${decimalNumber} to octal...`);
    }
    while (decimalNumber > 0) {
        let remainder = decimalNumber % 8;
        if (stepByStep) {
            console.log(`${decimalNumber} ÷ 8 = ${Math.floor(decimalNumber / 8)} | remainder = ${remainder}`);
            output += `${decimalNumber} ÷ 8 = ${Math.floor(decimalNumber / 8)} | remainder = ${remainder}\n`;
        }
        octal = remainder.toString() + octal;
        decimalNumber = Math.floor(decimalNumber / 8);
    }
    if(stepByStep){
        alert(`${output}\n${octal}`);
    }
    return octal;
}

function decimalToHexadecimal(decimalNumber, stepByStep = false) {
    const letters = { 10: "A", 11: "B", 12: "C", 13: "D", 14: "E", 15: "F" };
    let hexadecimal = "";
    let output = "";
    if (stepByStep) {
        alert(`Converting number ${decimalNumber} to hexadecimal...`);
    }
    while (decimalNumber > 0) {
        let remainder = decimalNumber % 16;
        let digit = remainder < 10 ? remainder.toString() : letters[remainder];
        if (stepByStep) {
            console.log(`${decimalNumber} ÷ 16 = ${Math.floor(decimalNumber / 16)} | remainder = ${remainder}`);
            output += `${decimalNumber} ÷ 16 = ${Math.floor(decimalNumber / 16)} | remainder = ${remainder}\n`;
        }
        hexadecimal = digit + hexadecimal;
        decimalNumber = Math.floor(decimalNumber / 16);
    }
    if(stepByStep){
        alert(`${output}\n${hexadecimal}`);
    }
    return hexadecimal;
}

function decimalFractionaryToBinary(fractionaryNumber, step_by_step=false) {
    output = ""
    let [integerPart, fractionaryPart] = fractionaryNumber.toString().split(".").map(Number);
    let integerBinary = decimalToBinary(integerPart);
    let fractionaryBinary = "";
    let fraction = fractionaryPart / Math.pow(10, fractionaryPart.toString().length);
    while (fraction !== 0 && fractionaryBinary.length < 5) {
        output += `${fraction} * 2 = ${fraction*2}\n`
        fraction *= 2;
        let bit = Math.floor(fraction);
        fractionaryBinary += bit.toString();
        fraction -= bit;
    }
    if (step_by_step){
        alert(`Converting number ${fractionaryNumber} to binary...`);
        alert(`Parte inteira para binario\n${decimalToBinary(integerPart, step_by_step=true)}\nParte fracionaria para binario:\n${output}\n`);
        alert(`Result: ${integerBinary},${fractionaryBinary}`);
    }


    return `${integerBinary},${fractionaryBinary}`;
}

// até aqui tudo beleza


function binaryToDecimal(binaryNumber) {
    return parseInt(binaryNumber, 2);
}

function binaryToOctal(binaryNumber) {
    let decimal = binaryToDecimal(binaryNumber);
    return decimalToOctal(decimal);
}

function binaryToHexadecimal(binaryNumber) {
    let decimal = binaryToDecimal(binaryNumber);
    return decimalToHexadecimal(decimal);
}

function octalToDecimal(octalNumber) {
    return parseInt(octalNumber, 8);
}

function octalToBinary(octalNumber) {
    let decimal = octalToDecimal(octalNumber);
    return decimalToBinary(decimal);
}

function octalToHexadecimal(octalNumber) {
    let decimal = octalToDecimal(octalNumber);
    return decimalToHexadecimal(decimal);
}

function hexadecimalToDecimal(hexadecimalNumber) {
    return parseInt(hexadecimalNumber, 16);
}

function hexadecimalToBinary(hexadecimalNumber){
    let decimal = hexadecimalToDecimal(hexadecimalNumber);
    return decimalToBinary(decimal);
}

function hexadecimalToOctal(hexadecimalNumber){
    let decimal = hexadecimalToDecimal(hexadecimalNumber);
    return decimalToOctal(decimal);
}

function calcular(step_by_step=false){
    let base_convert = document.getElementById('select').value;
    let convert_to = document.getElementById('select2').value;
    let number = document.getElementById('number').value;
    result_label = document.getElementById('result');

    if (base_convert == "decimal" && convert_to == "binary"){
        result_label.textContent = decimalToBinary(number);
    }
    else if (base_convert == "decimal" && convert_to == "decimal"){
        result_label.textContent = number;
    }
    else if (base_convert == "decimal" && convert_to == "octal"){
        result_label.textContent = decimalToOctal(number);
    }
    else if (base_convert == "decimal" && convert_to == "hexadecimal"){
        result_label.textContent = decimalToHexadecimal(number);
    }
    else if (base_convert == "decimal" && convert_to == "fractionary_binary"){
        result_label.textContent = decimalFractionaryToBinary(number);
    }
    else if (base_convert == "binary" && convert_to == "decimal"){
        result_label.textContent = binaryToDecimal(number);
    }
    else if(base_convert == "binary" && convert_to == "binary"){
        result_label.textContent = number;
    }
    else if (base_convert == "binary" && convert_to == "octal"){
        result_label.textContent = binaryToOctal(number);
    }
    else if (base_convert == "binary" && convert_to == "hexadecimal"){
        result_label.textContent = binaryToHexadecimal(number);
    }
    else if (base_convert == "octal" && convert_to == "decimal"){
        result_label.textContent = octalToDecimal(number);
    }
    else if (base_convert == "octal" && convert_to == "binary"){
        result_label.textContent = octalToBinary(number);
    }
    else if (base_convert == "octal" && convert_to == "octal"){
        result_label.textContent = number;
    }
    else if (base_convert == "octal" && convert_to == "hexadecimal"){
        result_label.textContent = octalToHexadecimal(number);
    }
    else if (base_convert == "hexadecimal" && convert_to == "decimal"){
        result_label.textContent = hexadecimalToDecimal(number);
    }
    else if (base_convert == "hexadecimal" && convert_to == "binary"){
        result_label.textContent = hexadecimalToBinary(number);
    }
    else if (base_convert == "hexadecimal" && convert_to == "octal"){
        result_label.textContent = hexadecimalToOctal(number);
    }
    else if (base_convert == "hexadecimal" && convert_to == "hexadecimal"){
        result_label.textContent = number;
    }
    else {
        result_label.textContent = "Invalid input";
    }
}

const stepByStepButton = document.getElementById('step_by_step');

function calcular2(){
    let base_convert = document.getElementById('select').value;
    let convert_to = document.getElementById('select2').value;
    let number = document.getElementById('number').value;
    result_label = document.getElementById('result');

    if (base_convert == "decimal" && convert_to == "binary"){
        decimalToBinary(number, step_by_step=true);
    }
    else if (base_convert == "decimal" && convert_to == "octal"){
        decimalToOctal(number, step_by_step=true);
    }
    else if (base_convert == "decimal" && convert_to == "hexadecimal"){
        decimalToHexadecimal(number, step_by_step=true);
    }
    else if (base_convert == "decimal" && convert_to == "fractionary_binary"){
        decimalFractionaryToBinary(number, step_by_step=true);
    }
}
// stepByStepButton.addEventListener("click", ()=>{
//     let base_convert = document.getElementById('select').value;
//     let convert_to = document.getElementById('select2').value;
//     let number = document.getElementById('number').value;
//     result_label = document.getElementById('result');

//     if (base_convert == "decimal" && convert_to == "binary"){
//         alert(decimalToBinary(document.getElementById('number').value, step_by_step=true))
//     }
// })    

document.getElementById('select').onclick = function(){
    if (!document.getElementById('fractionary_binary_option')){
        fbo = document.createElement("option");
        fbo.text = "fractionary binary";
        fbo.value = "fractionary_binary";
        fbo.id = "fractionary_binary_option";
        document.getElementById('select2').appendChild(fbo);
    }
}

document.getElementById('select2').onclick = function() {
    if (document.getElementById('select').value == "decimal"){
        document.getElementById('fractionary_binary_option').removeAttribute("hidden")
    }
    else{
        document.getElementById('select2').removeChild(document.getElementById("fractionary_binary_option"));
    }
}