document.getElementById("button").addEventListener("click", on_Click);
function on_Click(){
    var ar = [1,2,3,4];
    let x = document.getElementById("add_Number").value;
    ar.push(x);
    document.getElementById("text").innerHTML = "The new array is: " + ar;
}
