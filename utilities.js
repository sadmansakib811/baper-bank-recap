function getInputValueById(inputFieldID){
    const inputField = document.getElementById(inputFieldID);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat (inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}
function getElementValueById(elementID){
    const textelement = document.getElementById(elementID);
    const textElementValueString = textelement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}

function setTextElementValueByID (elementID, newValue){
const textElement =document.getElementById(elementID);
textElement.innerText = newValue;
}