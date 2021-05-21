document.getElementById("button").addEventListener("click", onClick)
function onClick() {
    pickColor();
}
function pickColor() {
    let redCheck = document.getElementById("red");
    let blueCheck = document.getElementById("blue");
    let greenCheck = document.getElementById("green");
    if (redCheck.checked == true && blueCheck.checked == false && greenCheck.checked == false){
        document.body.style.backgroundColor = "red";
    }
    if(redCheck.checked == false && blueCheck.checked == true && greenCheck.checked == false){
        document.body.style.backgroundColor = "blue";
    }
    if(redCheck.checked == false && blueCheck.checked == false && greenCheck.checked == true){
        document.body.style.backgroundColor = "green";
    }
    if(redCheck.checked == true && blueCheck.checked == true && greenCheck.checked == false){
        document.body.style.backgroundColor = "purple";
    }
    if(redCheck.checked == true && blueCheck.checked == false && greenCheck.checked == true){
        document.body.style.backgroundColor = "yellow";
    }
    if(redCheck.checked == false && blueCheck.checked == true && greenCheck.checked == true){
        document.body.style.backgroundColor = "#01f7f7";
    }
    if(redCheck.checked == true && blueCheck.checked == true && greenCheck.checked == true){
        alert("Red + green + blue = white");
        document.body.style.backgroundColor = "white";
    }
    if(redCheck.checked == false && blueCheck.checked == false && greenCheck.checked == false){
        insertColor();
    }
}
function insertColor(){
    let color = document.getElementById("color").value;
    document.body.style.backgroundColor = color;
}
