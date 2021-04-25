document.getElementById("login_Box").addEventListener("click", on_Click)
function on_Click(){
    let x = document.getElementById("email").value;
    let y = document.getElementById("password").value;
    if (x === 'example@gmail.com' && y === '123'){
        check();
    }
    else{
        alert("Wrong");
    }
}
function check(){
    document.getElementById("page").style.display="none";
    document.getElementById("second_Page").style.display="block";
}
