document.getElementById("button").addEventListener("click", onClick)
function onClick() {
    randomMeme();
}
function randomMeme() {
    var meme = ["https://s7280.pcdn.co/wp-content/uploads/2019/07/my-code-doesnt-work-300x229.png",
                "https://s7280.pcdn.co/wp-content/uploads/2019/07/i-am-developer-300x148.png",
                "https://s7280.pcdn.co/wp-content/uploads/2019/07/heck-overflow-300x208.png",
                "https://s7280.pcdn.co/wp-content/uploads/2019/07/computer-facts-380x260.png",
                "https://s7280.pcdn.co/wp-content/uploads/2019/07/worked-fine-in-dev.png",
                "https://s7280.pcdn.co/wp-content/uploads/2019/07/breaks-in-production.png"]
    let x = meme[Math.floor(Math.random() * 6)];
    showImg(x);
}
function showImg(x) {
    var img = document.createElement("IMG");
    img.setAttribute("src", x);

    document.body.appendChild(img);
}