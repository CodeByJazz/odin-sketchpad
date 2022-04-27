const grid = document.querySelector("#grid");
const start = document.querySelector("#start-button");
const reset = document.querySelector("#reset-button");
const maxWidth = 400;

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
  }
}
// function newGrid(number) {
//   //   window.location.reload();
//   let gridNum = prompt("How many sqaures per side?");
//   alert(gridNum);
//   let squares = gridNum * gridNum;
//   for (x = 0; x < squares; x++) {
//     const content = document.createElement("div");
//     grid.appendChild(content);
//   }
// }
