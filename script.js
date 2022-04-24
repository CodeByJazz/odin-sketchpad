const grid = document.querySelector("#grid");

for (x = 0; x < 16; x++) {
  const content = document.createElement("div");

  content.classList.add = "square";

  content.textContent = "hello world";

  grid.appendChild(content);
}
