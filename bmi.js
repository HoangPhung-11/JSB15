document.getElementById("button").addEventListener("click", on_Click)
function on_Click(){
    let x = document.getElementById("weight").value;
    let y = document.getElementById("height").value;
    let bmi = x/(y*y);
    check_Bmi(bmi);
}
function check_Bmi(bmi){
    if(bmi < 18.5){
        document.getElementById("text").innerHTML = "Your bmi is: " + bmi;
        document.getElementById("second_Text").innerHTML = "You are wasted";
    }
    else if(bmi >= 18.5 && bmi <= 24.9){
        document.getElementById("text").innerHTML = "Your bmi is: " + bmi;
        document.getElementById("second_Text").innerHTML = "normal";
    }
    else if(bmi >= 25 && bmi <=29.9){
        document.getElementById("text").innerHTML = "Your bmi is: " + bmi;
        document.getElementById("second_Text").innerHTML = "You are overweight";
    }
    else if(bmi >= 30 && bmi <= 39.9){
        document.getElementById("text").innerHTML = "Your bmi is: " + bmi;
        document.getElementById("second_Text").innerHTML = "You are obese";
    }
    else{
        document.getElementById("text").innerHTML = "Your bmi is: " + bmi;
        document.getElementById("second_Text").innerHTML = "You are extremely obese";
    }
}