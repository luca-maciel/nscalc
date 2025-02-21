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

function binaryFractionaryToDecimal(binaryNumber, step_by_step=false){
    if (step_by_step){
        let parts = binaryNumber.split('.');
        let integerPart = parts[0];
        let fractionalPart = parts[1];
        let decimalValue = 0;
        let steps = `Converting binary fraction ${binaryNumber} to decimal:\n\n`;
    
        // Step-by-step for the integer part
        steps += `Converting the integer part:\n`;
        for (let i = 0; i < integerPart.length; i++) {
            if (integerPart[i] === '1') {
                let power = integerPart.length - 1 - i;
                decimalValue += Math.pow(2, power);
                steps += `1 × 2^${power} = ${Math.pow(2, power)}\n`;
            }
        }
    
        // Step-by-step for the fractional part
        steps += `\nConverting the fractional part:\n`;
        for (let i = 0; i < fractionalPart.length; i++) {
            if (fractionalPart[i] === '1') {
                let power = -(i + 1);
                decimalValue += Math.pow(2, power);
                steps += `1 × 2^(${power}) = ${Math.pow(2, power)}\n`;
            }
        }
    
        steps += `\nFinal decimal value: ${decimalValue}`;
        alert(steps);
        return decimalValue;
    }
    else{
        let parts = binaryNumber.split('.');
        let integerPart = parts[0];
        let fractionalPart = parts[1];
        let decimalValue = 0;

        // Convert the integer part
        for (let i = 0; i < integerPart.length; i++) {
            if (integerPart[i] === '1') {
                decimalValue += Math.pow(2, integerPart.length - 1 - i);
            }
        }

        // Convert the fractional part
        for (let i = 0; i < fractionalPart.length; i++) {
            if (fractionalPart[i] === '1') {
                decimalValue += Math.pow(2, -(i + 1));
            }
        }

        return decimalValue;
    }
}

function binaryToDecimal(binaryNumber, step_by_step=false) {
    if (step_by_step){
        let decimal = 0;
        let steps = `Converting binary ${binaryNumber} to decimal:\n`;
    
        let binaryString = binaryNumber.toString();
        let reversedBinary = binaryString.split("").reverse(); 
    
        for (let i = 0; i < reversedBinary.length; i++) {
            let bit = parseInt(reversedBinary[i]);
            let power = Math.pow(2, i);
            let result = bit * power;
            decimal += result;
            steps += `${bit} × 2^${i} = ${result}\n`;
        }
    
        steps += `Final result: ${decimal}`;
        alert(steps);
        return decimal;
    }

    else {
        return parseInt(binaryNumber, 2);
    }
}


function binaryToOctal(binaryNumber, step_by_step=false) {
    if (step_by_step){
        let binaryString = binaryNumber.toString();
        let steps = `Converting binary ${binaryString} to octal:\n`;
    
        // Certificar que o número tem múltiplo de 3 bits
        while (binaryString.length % 3 !== 0) {
            binaryString = "0" + binaryString;
        }
    
        steps += `Binary after padding: ${binaryString}\n`;
    
        let octal = "";
        for (let i = 0; i < binaryString.length; i += 3) {
            let group = binaryString.slice(i, i + 3);
            let decimalValue = parseInt(group, 2);
            octal += decimalValue;
            steps += `${group} (bin) = ${decimalValue} (oct)\n`;
        }
    
        steps += `Final result: ${octal}`;
        alert(steps);
        return octal;
    }
    else{
        let decimal = binaryToDecimal(binaryNumber);
        return decimalToOctal(decimal);
    }
}

function binaryToHexadecimal(binaryNumber, step_by_step=false) {
    if (step_by_step){
        let binaryString = binaryNumber.toString();
        let steps = `Converting binary ${binaryString} to hexadecimal:\n`;

        // Certificar que o número tem múltiplo de 4 bits
        while (binaryString.length % 4 !== 0) {
            binaryString = "0" + binaryString;
        }

        steps += `Binary after padding: ${binaryString}\n`;

        let hex = "";
        const hexMap = {
            10: "A",
            11: "B",
            12: "C",
            13: "D",
            14: "E",
            15: "F"
        };

        for (let i = 0; i < binaryString.length; i += 4) {
            let group = binaryString.slice(i, i + 4);
            let decimalValue = parseInt(group, 2);
            let hexValue = decimalValue >= 10 ? hexMap[decimalValue] : decimalValue;
            hex += hexValue;
            steps += `${group} (bin) = ${hexValue} (hex)\n`;
        }

        steps += `Final result: ${hex}`;
        alert(steps);
        return hex;
    }

    else {
        let decimal = binaryToDecimal(binaryNumber);
        return decimalToHexadecimal(decimal);
    }
}

function octalToDecimal(octalNumber, step_by_step=false) {
    if (step_by_step){
        let octalString = octalNumber.toString();
        let decimal = 0;
        let steps = `Converting octal ${octalString} to decimal:\n`;

        let reversedOctal = octalString.split("").reverse(); 

        for (let i = 0; i < reversedOctal.length; i++) {
            let digit = parseInt(reversedOctal[i]);
            let power = Math.pow(8, i);
            let result = digit * power;
            decimal += result;
            steps += `${digit} × 8^${i} = ${result}\n`;
        }

        steps += `Final result: ${decimal}`;
        alert(steps);
        return decimal;
    }
    else{
        return parseInt(octalNumber, 8);
    }
}

function octalToBinary(octalNumber, step_by_step=false) {
    if (step_by_step){
        let octalString = octalNumber.toString();
        let binary = "";
        let steps = `Converting octal ${octalString} to binary:\n`;

        // Converter cada dígito octal para binário
        for (let i = 0; i < octalString.length; i++) {
            let octalDigit = parseInt(octalString[i]);
            let binaryValue = octalDigit.toString(2).padStart(3, '0'); // Adiciona zeros à esquerda se necessário
            binary += binaryValue;
            steps += `${octalDigit} (oct) = ${binaryValue} (bin)\n`;
        }

        // Remover zeros à esquerda
        let finalBinary = binary.replace(/^0+/, "");

        steps += `Final result: ${finalBinary}`;
        alert(steps);
        return finalBinary;
    }   
    else{
        let decimal = octalToDecimal(octalNumber);
        return decimalToBinary(decimal);
    }
}

function octalToHexadecimal(octalNumber, step_by_step=false) {
    if (step_by_step){
        let steps = `Converting octal ${octalNumber} to hexadecimal:\n`;
    
        // Passo 1: Converter octal para decimal
        let decimal = 0;
        let octalString = octalNumber.toString();
        let reversedOctal = octalString.split("").reverse();
        for (let i = 0; i < reversedOctal.length; i++) {
            let digit = parseInt(reversedOctal[i]);
            let power = Math.pow(8, i);
            decimal += digit * power;
            steps += `${digit} × 8^${i} = ${digit * power}\n`;
        }
    
        steps += `Decimal equivalent: ${decimal}\n`;
    
        // Passo 2: Converter decimal para hexadecimal
        let hex = "";
        const hexMap = {10: "A", 11: "B", 12: "C", 13: "D", 14: "E", 15: "F"};
    
        while (decimal > 0) {
            let remainder = decimal % 16;
            let hexDigit = remainder >= 10 ? hexMap[remainder] : remainder;
            hex = hexDigit + hex;
            decimal = Math.floor(decimal / 16);
            steps += `${remainder} → ${hexDigit} (hexadecimal)\n`;
        }
    
        steps += `Final hexadecimal result: ${hex}`;
        alert(steps);
        return hex;
    }
    else{
        let decimal = octalToDecimal(octalNumber);
        return decimalToHexadecimal(decimal);
    }
}

function hexadecimalToDecimal(hexadecimalNumber, step_by_step=false) {
    if (step_by_step){
        let hexString = hexadecimalNumber.toString().toUpperCase();
        let decimal = 0;
        let steps = `Converting hexadecimal ${hexString} to decimal:\n`;
    
        let hexMap = {
            A: 10,
            B: 11,
            C: 12,
            D: 13,
            E: 14,
            F: 15
        };
    
        let reversedHex = hexString.split("").reverse(); 
    
        for (let i = 0; i < reversedHex.length; i++) {
            let hexDigit = reversedHex[i];
            let decimalValue = isNaN(hexDigit) ? hexMap[hexDigit] : parseInt(hexDigit);
            let power = Math.pow(16, i);
            let result = decimalValue * power;
            decimal += result;
            if (decimalValue >= 10){
                steps += `${hexDigit} (${hexMap[hexDigit]}) × 16^${i} = ${result}\n`;
            }
            else{
                steps += `${hexDigit} × 16^${i} = ${result}\n`;
            }
        }
    
        steps += `Final result: ${decimal}`;
        alert(steps);
        return decimal;
    }
    else{
        return parseInt(hexadecimalNumber, 16);

    }
}

function hexadecimalToBinary(hexadecimalNumber, step_by_step=false){
    if (step_by_step){
        let hexString = hexadecimalNumber.toString().toUpperCase();
        let steps = `Converting hexadecimal ${hexString} to binary:\n`;

        const hexMap = {
            '0': '0000',
            '1': '0001',
            '2': '0010',
            '3': '0011',
            '4': '0100',
            '5': '0101',
            '6': '0110',
            '7': '0111',
            '8': '1000',
            '9': '1001',
            'A': '1010',
            'B': '1011',
            'C': '1100',
            'D': '1101',
            'E': '1110',
            'F': '1111'
        };

        let binary = '';

        for (let i = 0; i < hexString.length; i++) {
            let hexDigit = hexString[i];
            let binValue = hexMap[hexDigit];
            binary += binValue;
            steps += `${hexDigit} (${binValue})\n`;
        }

        steps += `Final result in binary: ${binary}`;
        alert(steps);
        return binary;
    }
    else{
        let decimal = hexadecimalToDecimal(hexadecimalNumber);
        return decimalToBinary(decimal);

    }
}

function hexadecimalToOctal(hexadecimalNumber, step_by_step=false){
    if (step_by_step){
        let hexString = hexadecimalNumber.toString().toUpperCase();
        let steps = `Converting hexadecimal ${hexString} to octal:\n`;
    
        // Map each hex digit to its decimal value
        const hexMap = {
            '0': 0,
            '1': 1,
            '2': 2,
            '3': 3,
            '4': 4,
            '5': 5,
            '6': 6,
            '7': 7,
            '8': 8,
            '9': 9,
            'A': 10,
            'B': 11,
            'C': 12,
            'D': 13,
            'E': 14,
            'F': 15
        };
    
        // Convert hex to decimal first
        let decimalValue = 0;
        let reversedHex = hexString.split("").reverse();
    
        for (let i = 0; i < reversedHex.length; i++) {
            let hexDigit = reversedHex[i];
            let decimalDigit = hexMap[hexDigit];
            decimalValue += decimalDigit * Math.pow(16, i);
            steps += `${hexDigit} (decimal ${decimalDigit}) × 16^${i} = ${decimalDigit * Math.pow(16, i)}\n`;
        }
    
        steps += `Decimal value: ${decimalValue}\n`;
    
        // Now convert decimal to octal
        let octalValue = '';
        while (decimalValue > 0) {
            let octalDigit = decimalValue % 8;
            octalValue = octalDigit + octalValue;
            steps += `${decimalValue} ÷ 8 = ${Math.floor(decimalValue / 8)}, remainder ${octalDigit}\n`;
            decimalValue = Math.floor(decimalValue / 8);
        }
    
        steps += `Final result in octal: ${octalValue}`;
        alert(steps);
        return octalValue;
    }

    else{
        let decimal = hexadecimalToDecimal(hexadecimalNumber);
        return decimalToOctal(decimal);

    }
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
    else if (base_convert == "fractionary_binary" && convert_to == "decimal"){
        result_label.textContent = binaryFractionaryToDecimal(number);
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

// const stepByStepButton = document.getElementById('step_by_step');

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
    else if (base_convert == "fractionary_binary" && convert_to == "decimal"){
        binaryFractionaryToDecimal(number, step_by_step=true);
    }

    else if (base_convert == "binary" && convert_to == "decimal"){
        binaryToDecimal(number, step_by_step=true);
    }
    else if (base_convert == "binary" && convert_to == "octal"){
        binaryToOctal(number, step_by_step=true);
    }
    else if (base_convert == "binary" && convert_to == "hexadecimal"){
        binaryToHexadecimal(number, step_by_step=true);
    }
    else if (base_convert == "octal" && convert_to == "decimal"){
        octalToDecimal(number, step_by_step=true);
    }
    else if (base_convert == "octal" && convert_to == "binary"){
        octalToBinary(number, step_by_step=true);
    }
    else if (base_convert == "octal" && convert_to == "hexadecimal"){
        octalToHexadecimal(number, step_by_step=true);
    }
    else if (base_convert == "hexadecimal" && convert_to == "decimal"){
        hexadecimalToDecimal(number, step_by_step=true);
    }
    else if (base_convert == "hexadecimal" && convert_to == "binary"){
        hexadecimalToBinary(number, step_by_step=true);
    }
    else if (base_convert == "hexadecimal" && convert_to == "octal"){
        hexadecimalToOctal(number, step_by_step=true);
    }
}  

document.getElementById('step_by_step').addEventListener("click", ()=>{
    calcular2();
})

// document.getElementById('select').onclick = function(){
//     if (!document.getElementById('fractionary_binary_option')){
//         fbo = document.createElement("option");
//         fbo.text = "fractionary binary";
//         fbo.value = "fractionary_binary";
//         fbo.id = "fractionary_binary_option";
//         document.getElementById('select2').appendChild(fbo);
//     }
// }

// document.getElementById('select2').onclick = function() {
//     if (document.getElementById('select').value == "decimal"){
//         document.getElementById('fractionary_binary_option').removeAttribute("hidden")
//     }
//     else{
//         document.getElementById('select2').removeChild(document.getElementById("fractionary_binary_option"));
//     }
// }