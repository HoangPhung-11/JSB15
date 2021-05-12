document.getElementById("button").addEventListener("click", on_Click);
function on_Click(){
    let x = document.getElementById("input").value;
    let product = 1;
    for (let i=1; i <= x; i++){
        product = product * i;
    }
    document.getElementById("text").innerHTML = "The factorial of " + x + " is: " + product;
}