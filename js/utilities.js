function getInputValueById(id){
    const value = document.getElementById(id).value;
    const inputNum = parseFloat(value);
    return inputNum;
}