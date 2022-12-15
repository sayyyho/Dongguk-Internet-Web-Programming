const body = document.body
const h3 = document.querySelector("h3");
const button = document.querySelector("button")
let newWin = window.open("", "outWin", ""); 
h3.addEventListener("mouseover",() => h3.style.color = "orange");
h3.addEventListener("mouseout", () => h3.style.color = "black");
button.addEventListener("click", ()=> {
    newWin.document.open();
    newWin.document.write("hello");
    newWin.document.close();
});
let span = document.createElement("span");
span.innerText = "createElement";
body.append(span)