document.getElementById("button").addEventListener("click", on_Click);
function on_Click(){
    let color = ["red", "yellow", "green"]; 
    document.body.style.backgroundColor = color[Math.floor(Math.random()*3)]
}
