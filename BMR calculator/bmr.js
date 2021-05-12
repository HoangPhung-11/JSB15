document.getElementById("button").addEventListener("click", on_Click)
function on_Click(){
    let female_Check = document.getElementById("female");
    let male_Check = document.getElementById("male");
    if(female_Check.checked == true && male_Check.checked == true){
        alert("You can select only one gender");
    }
    else if(female_Check.checked == false && male_Check.checked == false){
        alert("Please select your gender");
    }
    else if(female_Check.checked == true && male_Check == false){
        female_Bmr();
    }
    else{
        male_Bmr();
    }
}
function female_Bmr(){
    let x = document.getElementById("weight").value;
    let y = document.getElementById("height").value;
    let z = document.getElementById("age").value;
    let bmr = 9.99*x + 6.25*y -4.92*z -161;
    document.getElementById("text").innerHTML ="Your BMR is: " + bmr;
}
function male_Bmr(){
    let x = document.getElementById("weight").value;
    let y = document.getElementById("height").value;
    let z = document.getElementById("age").value;
    let bmr = 9.99*x + 6.25*y -4.92*z+5;
    document.getElementById("text").innerHTML ="Your BMR is: " + bmr;
}