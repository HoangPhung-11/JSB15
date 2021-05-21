document.getElementById("button").addEventListener("click", onClick)
function onClick() {
    let x1 = Math.floor(Math.random() * 16);
    let x2 = Math.floor(Math.random() * 16);
    let x3 = Math.floor(Math.random() * 16);
    let x4 = Math.floor(Math.random() * 16);
    let x5 = Math.floor(Math.random() * 16);
    let x6 = Math.floor(Math.random() * 16);
    let x7 = "#" + decimalToHexString(x1) + decimalToHexString(x2) + decimalToHexString(x3) + decimalToHexString(x4) + decimalToHexString(x5) +decimalToHexString(x6)
    document.getElementById("text").innerHTML = "Name of the color: " + x7;
    document.body.style.backgroundColor = x7;
}
function decimalToHexString(number)
{
    return number.toString(16).toUpperCase();
}