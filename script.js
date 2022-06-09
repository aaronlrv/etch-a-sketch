function table () {

    /* Takes user input converts it to number and gets a total*/
    let rows = document.querySelector("#row").value
    let columns = document.querySelector("#column").value

    let i = parseInt(rows)
    let j = parseInt(columns)

    if (i > 100 || j > 100){
        alert("Your selection is too big!")
        return
    }

    console.log(i)
    console.log(j)
    console.log(typeof(i))
    console.log(typeof(j))

    let total = i* j
    console.log(total)

    /* Creates x amount of divs based on total */
let table = document.querySelector(".grid-container")

for (k = 0; k < total; k++){
    let myRow = document.createElement("div")
    myRow.className = "gridBoxes"
    table.appendChild(myRow)
}

/*Listens for when user hovers over div and colors them by applying classes*/
let divs = document.querySelectorAll(".gridBoxes")

divs.forEach(div => 
div.addEventListener('mouseenter', function (){ 
div.classList.add('black')

}))

}







