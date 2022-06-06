function table(){
    let table = document.getElementById("pixelCanvas")

    for (i = 0; i < 16; i++){
    let myRow = document.createElement("tr")
    myRow.className = "gridBoxes"
    
    table.appendChild(.gridBoxes)
    let rowW = document.getElementById("row" + i)

    for (j = 0; j < 16; j++){
        let myCell = document.createElement("td")

        rowW.appendChild(myCell)
    }
}
}

table()
