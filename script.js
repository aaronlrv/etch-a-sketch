function table () {

    let rows = document.querySelector("#row").value
    let columns = document.querySelector("#column").value

    let i = parseInt(rows)
    let j =parseInt(columns)

    console.log(i)
    console.log(j)
    console.log(typeof(i))
    console.log(typeof(j))

    let total = i* j
    console.log(total)
    let squares = total 
    console.log(squares)

let table = document.querySelector(".grid-container")

for (k = 0; k < squares; k++){
    let myRow = document.createElement("div")
    myRow.className = "gridBoxes"
    table.appendChild(myRow)

}
}
let divs = document.querySelectorAll(".gridBoxes")

divs.forEach(div => 
div.addEventListener('mouseenter', function (){ 
div.classList.add('black')

}))





