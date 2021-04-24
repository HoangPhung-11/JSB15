run = true;
while (run){
let year = prompt("Insert the year you want to know if it a leap year or not");
if (year%100 == 0){
    if (year%400==0){
        console.log("This is a leap year");
    }
    else {
        console.log("This is not a leap year");
    }
}
else {
    if (year%4==0){
        console.log("This is a leap year");
    }
    else {
        console.log("This is not a leap year");
    }
}
let number = prompt("Press 5 to stop or any other keys to continue");
if (number == 5){
    run = false;
}
}