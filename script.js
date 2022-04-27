const grid = document.querySelector("#grid");
const start = document.querySelector("#start-button");
const reset = document.querySelector("#reset-button");
const maxWidth = 500;

window.addEventListener("load", makeGrid);

let size = 16;

function makeGrid() {
  for (let r = 0; r < size; r++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let c = 0; c < size; c++) {
      let column = document.createElement("div");
      column.classList.add("column");
      row.appendChild(column);
    }
    document.getElementById("grid").appendChild(row);
    let squares = document.getElementsByClassName("column");
    for (i = 0; i < squares.length; i++) {
      squares[i].style.width = maxWidth / size + "px";
      squares[i].style.height = maxWidth / size + "px";
    }
  }
}
