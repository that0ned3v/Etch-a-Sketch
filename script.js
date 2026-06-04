let container = document.querySelector("#container");

button = document.querySelector("#Button");
button.addEventListener("click", changeAmount);

clear = document.querySelector("#clear");
clear.addEventListener("click", clearGrid);

createGrid(16);

function createGrid(number) {
  for (let i = 0; i < number * number; i++) {
    let grid = document.createElement("div");

    grid.style.boxSizing = "border-box";
    grid.style.border = `${number / 10000}px solid gray`;
    grid.style.padding = "0";
    grid.style.opacity = "0.1";
    grid.style.flex = `0 0 calc(100% / ${number})`;
    grid.style.aspectRatio = `5 / 5`;
    grid.addEventListener("mouseenter", function () {
      grid.style.backgroundColor = "black";
      grid.style.opacity = `${parseFloat(grid.style.opacity) + 0.1}`;
    });
    grid.style.margin = "0.001";

    container.appendChild(grid);
  }
}

function changeAmount() {
  let fish = container.querySelectorAll("div");
  for (let i = 0; i < fish.length; i++) {
    container.removeChild(fish[i]);
  }
  input = prompt(
    `Would you like to change the grid?, if yes what would you like the new grid to be`,
  );
  if (input > 100) {
    input = 100;
    alert(
      "this number exeeds the limit of 100, the bumber has been set to 100",
    );
  }
  createGrid(input);
}

function clearGrid() {
  let fish = container.querySelectorAll("div");
  for (let i = 0; i < fish.length; i++) {
    fish[i].style.backgroundColor = "white";
    fish[i].style.opacity = "0.1";
  }
}
