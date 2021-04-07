alert("Welcome to the perimeter calculator")
while(true){
alert("Choose a shape:")
let number = prompt("1. Circle" + "\n 2.Rectangle or Square" + "\n 3. Triangle")
if (number == 1)
{
    let radius = prompt("Insert the radius of your circle:")
    let circlePer = Math.round (radius * radius * 3.14159265 *100)/100
    alert("The perimeter of your circle is: " + circlePer)
}
else if (number == 2)
{
    let firstSide = prompt("Insert your shape's first side:")
    let secondSide = prompt("Insert your shape's second side:")
    let  recPer = Math.round (firstSide*2+secondSide*2*100)/100
    if (firstSide == secondSide)
    {
        alert("The perimeter of your Square is: " + recPer)
    }
    else 
    {
        alert("The perimeter of your Rectangle is: " +recPer)
    }
} 
else if (number == 3)
{
    let height = prompt("Insert your Triangle's height:")
    let bottomSide = prompt("Insert the length of your Triangle's bottom:")
    let triPer = Math.round(height*bottomSide/2 *100)/100
    alert("The perimeter of your Triangle is: " + triPer)
}
else 
{
    alert("Invalid number")
}
let checkNumber = prompt("Press 5 if you want to stop or anykeys if you want to continue")
if (checkNumber == 5)
{
    alert("Thank you")
    break;
}
}

