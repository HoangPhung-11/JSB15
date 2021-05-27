//Default display
var check = ["true","false","false"];
let numButtons = document.getElementsByClassName("number");
let opButtons = document.getElementsByClassName("operator");
let firstResult = "";
let secondResult = "";
let thirdResult = "";
let temptResult = "";
let resultButton = document.getElementById("result");
resultButton.innerHTML = "0";
var equalCheck = false;

//Display number
for (let i=0; i<11;i++){
    numButtons[i].addEventListener("click", function (){
        if (check[0] == "true" && check[1] == "false" && check[2] == "false"){
            if (equalCheck == false){
                firstResult = firstResult + numButtons[i].innerHTML;
                temptResult = temptResult + numButtons[i].innerHTML;
                resultButton.innerHTML = temptResult;
            }
            else{
                temptResult = "";
                firstResult = firstResult + numButtons[i].innerHTML
                temptResult = temptResult + numButtons[i].innerHTML;
                resultButton.innerHTML = temptResult;
                equalCheck = false;
            }
        }
        else{
            thirdResult = thirdResult + numButtons[i].innerHTML;
            temptResult = temptResult + numButtons[i].innerHTML;
            resultButton.innerHTML = temptResult;
            check[2] = "true";
        }
    })
}

//Display operator 
for (let i=0; i < 5; i++){
    opButtons[i].addEventListener("click", function(){
        if (check[0] == "true" && check[1] == "false" && check[2] == "false"){
            secondResult = secondResult + opButtons[i].innerHTML;
            temptResult = temptResult + opButtons[i].innerHTML;
            resultButton.innerHTML = temptResult;
            check[1] = "true";
        }
        else if (check[0] == "true" && check[1] == "true" && check[2] == "false"){
            secondResult = opButtons[i].innerHTML;
            temptResult = firstResult + secondResult;
            resultButton.innerHTML = temptResult;
        }
    })
}

//Equal button 
document.getElementById("equal").addEventListener("click", equalFuction)
function equalFuction() {
    if (check[0] == "true" && check[1] == "true" && check[2] == "true"){
        let finalResult 
        let x = parseFloat(firstResult)
        let y = parseFloat(thirdResult)
        if (secondResult == "+"){
            finalResult = x + y;
        }
        else if (secondResult == "-"){
            finalResult = x-y;
        }
        else if (secondResult == "*"){
            finalResult = x*y;
        }
        else if (secondResult == "/"){
            finalResult = x/y;
        }
        else{
            finalResult = x /100;
        }
        temptResult = finalResult;
        secondResult = "";
        thirdResult = "";
        firstResult = finalResult;
        resultButton.innerHTML = finalResult;
        check[0] = "true";
        check[1] = "false";
        check[2] = "false";
        equalCheck = true;
    }
}

//Reset button
document.getElementById("reset").addEventListener("click", resetFuction)
function resetFuction() {
    temptResult = "";
    firstResult = "";
    secondResult = "";
    thirdResult = "";
    resultButton.innerHTML = "0";
    check[1] = "false";
    check[2] = "false";
}