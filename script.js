const grid = document.querySelector("#grid");
const start = document.querySelector("#start-button");
const reset = document.querySelector("#reset-button");
const maxWidth = 400;

for (x = 0; x < 256; x++) {
  const content = document.createElement("div");

  grid.appendChild(content);
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
