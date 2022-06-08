function createTable (){
let table = document.querySelector(".grid-container")

for (i = 0; i < 256; i++){
    let myRow = document.createElement("div")
    myRow.className = "gridBoxes"
    table.appendChild(myRow)
}
}

createTable()

let divs = document.querySelectorAll(".gridBoxes")

divs.forEach(div => 
div.addEventListener('mouseenter', function (){ 
div.classList.add('black')

}))





