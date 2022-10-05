const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

function changeColor() {
    let hexColor = "#";
    for(let i = 0; i<6; i++){
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.transition = "all 300ms linear";
    document.body.style.backgroundColor = hexColor;
}

window.addEventListener("load", function(event) {
    setInterval(() => { 
        changeColor();
    }, 2000)
})

btn.addEventListener("click", function(){
    changeColor();
})

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}