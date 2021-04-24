run = true
while(run){
    var count = [1,2,3,4,5,6,7,8,9,10]
    count.push(prompt("Which number do you want to add?"))
    console.log(count)
let number = prompt("Press 5 to stop or any other keys to continue")
if (number == 5) {
    run = false
}
}