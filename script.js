function table(){
    let table = document.querySelector(".container")

    for (i = 0; i < 16; i++){
    let row = document.createElement("tr")
    row.id = "row" + i
    let myRow = document.getElementById("row" + i)
    

    table.appendChild(row)

    for (j = 0; j < 16; i++){
        let myCell = document.createElement("td")

        myRow.appendChild(myCell)
    }
}
}

table()