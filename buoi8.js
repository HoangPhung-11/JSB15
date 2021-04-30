document.getElementById("button").addEventListener("click", on_Click)
function on_Click(){
    let x = document.getElementById("name").value;
    let y = document.getElementById("email").value;
    let z = document.getElementById("password").value;
    console.log("name: " + x);
    console.log("email: " + y);
    console.log("password: " + z);
    if(check_Space(x)){
        if(x.length == 0){
            alert("You haven't inserted your name");
        }
        else if(y.length == 0){
            alert("You haven't inserted your email");
        }
        else if(z.length == 0){
            alert("You haven't inserted your password");
        }
        else{
            check_Email();
        }
    }
    else{
        alert("Invalid name");
    }
} 
function validate_Email(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
function check_Email(){
    let email = document.getElementById("email").value;
    if(validate_Email(email)){
        login();
    }
    else{
        alert("You have entered an invalid email");
    }
    return false;
}
function login(){
    document.getElementById("sign_Up").style.display="none";
    document.getElementById("default").style.display="none";
    document.getElementById("after").style.display="flex";
    document.getElementById("login").style.display="flex";
    document.getElementById("login_Button").addEventListener("click", login_Process);
}
function login_Process(){
    let login_Email = document.getElementById("login_Email").value;
    let login_password = document.getElementById("login_Password").value;
    let signUpEmail = document.getElementById("email").value;
    let signUpPassword = document.getElementById("password").value;
    if (login_Email == signUpEmail && signUpPassword == login_password){
        alert("Login Success");
    }
    else{
        alert("Wrong email or password");
    }
}
function check_Space(string){
    let k = string.length;
    for (let i = 0; i<=k; i++){
        string = string.replace(" ", "");
    }
    if(string.length == 0){
        return false;
    }
    else{
        return true;
    }
}
