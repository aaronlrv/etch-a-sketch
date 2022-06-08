function createTable (){
let table = document.querySelector(".grid-container")

for (i = 0; i < 256; i++){
    let myRow = document.createElement("div")
    myRow.className = "gridBoxes"
    table.appendChild(myRow)
}
}

createTable()

let div = document.querySelectorAll(".gridBoxes")

div.forEach(div => 
div.addEventListener('mouseenter', function (){ 
console.log("Inside Div")}))


div.addEventListener("mouseleave", () =>
console.log('Mouse Exits'))


