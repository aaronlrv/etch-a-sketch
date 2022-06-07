function table (){
let table = document.querySelector(".grid-container")

for (i = 0; i < 37; i++){
    let myRow = document.createElement("div")
    myRow.className = "gridBoxes"
    table.appendChild(myRow)
}
}


/* 1st approach
function table(){
    let table = document.getElementById("pixelCanvas")

    for (i = 0; i < 16; i++){
    let myRow = document.createElement("tr")
    myRow.className = "gridBoxes" 
    
    table.appendChild(myRow)
    let rowW = document.querySelector(".gridBoxes")

    for (j = 0; j < 16; j++){
        let myCell = document.createElement("td")

        rowW.appendChild(myCell)
    }
}
}

*/
table()


