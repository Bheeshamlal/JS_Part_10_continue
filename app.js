// Keyboard Events 
// when we print event which is default in callback function parameter 

let inp = document.querySelector("input");

inp.addEventListener("keydown", function(e){
    console.log("key was pressed");
    console.log(e);  // when we open this in console we will see main things like "code" and "key"
    console.log(e.key);
    console.log(e.code);
    
})




























// let btn = document.querySelector("button");

// btn.addEventListener("click", function(e){
    
//     console.log("clicked");
//     this.style.backgroundColor = "blue";
//     console.log(e);
// });




// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// let div = document.querySelector("div");



// p.addEventListener("click", changeColor);
// div.addEventListener("mouseenter",changeColor);
// h1.addEventListener("click", changeColor);
// h3.addEventListener("click", changeColor);

