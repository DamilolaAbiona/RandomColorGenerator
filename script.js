// let randomColor = Math.random();
// randomNumber = Math.random().toString(16);
// randomColor = Math.random().toString(16).substring(2,8)
// console.log(randomColor);

const hex = document.querySelector(".hex")
const button = document.querySelector(".generate");
const copy = document.querySelector(".but")


const  colorGenerator = function () {
    randomColor = Math.random().toString(16).substring(2,8);
    hex.value = "#" + randomColor;
    document.body.style.background = hex.value;

}



const copyColor = function() {
    hex.select();
    hex.selectionRange(0, 7);

}
button.addEventListener("click", colorGenerator);

copy.addEventListener("click", copyColor)