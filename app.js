let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");
let div = document.querySelector("div");

function changeColor(){
    this.style.backgroundColor = "blue";
}


p.addEventListener("click", changeColor);
div.addEventListener("mouseenter",changeColor);
h1.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);

