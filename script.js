const grid = document.querySelector("#grid");
const startGame = document.querySelector("#start-button");
const resetGame = document.querySelector("#reset-button");
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
startGame.addEventListener("click", gridSize);

function gridSize() {
  let userGrid = prompt("Enter the number of squares per side for a new grid.");
  let userGridNumber = parseInt(userGrid);
  if (userGridNumber > 1 && userGridNumber <= 100) {
    size = userGrid;
    clearGrid();
    makeGrid();
  } else {
    alert("Enter a digit from 1-100.");
  }
}

function clearGrid() {
  const gridArray = Array.from(grid.childNodes);
  gridArray.forEach((element) => {
    grid.removeChild(element);
  });
}

resetGame.addEventListener("click", () => location.reload());
