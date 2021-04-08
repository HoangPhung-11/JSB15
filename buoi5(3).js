let num = prompt("Insert the number of numbers you want to insert:")
if (isNaN(num))
{
    console.log("This is not a number")
}
else {
var arr = new Array()
let sum = 0
let product = 1 
for (i =0; i<num; i++)
{
arr.push(prompt("Insert a number"))
product = product * arr[i]
sum = sum + Number(arr[i])
}
alert(product)
alert(sum)
var newArr = arr.sort()
alert("The smallest number is: " + newArr[0])
alert("The biggest number is: " + newArr[num-1])
}