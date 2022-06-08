function userInput (){
    let rows = document.querySelector("#row")
    let columns = document.querySelector("#column")

    if (rows < 101 || columns < 101){
        let rows = i
        let columns = j
    } else {
        alert("Selection for row and columns were too high!")
    }
}



function createTable (userInput){
let table = document.querySelector(".grid-container")

for (i = 0; i * j < 10000; i++){
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





