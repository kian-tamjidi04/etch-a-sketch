const GRID_SIZE = 720;

// Creates the grid that will be used
function createGrid(n) {
    const createBox = () => {
        const box = document.createElement("div");
        box.className = "box";
        const boxSize = GRID_SIZE / n;
        box.style = `width: ${boxSize}px; height: ${boxSize}px; background-color: white; border: 1px solid black; box-sizing: border-box;`;
        return box;
    };

    const gridContainer = document.querySelector(".container");
    gridContainer.style = `display: grid; grid-template-columns: repeat(${n}, 1fr); width: ${GRID_SIZE}px; height: ${GRID_SIZE}px;`;

    // Populates grid
    for (let i = 0; i < n * n; i++) {
        gridContainer.appendChild(createBox());
    }
}

createGrid(16);

const boxes = document.querySelectorAll(".box");

// Changes the colour of a box if the mouse hovers over it
boxes.forEach(box => {
    box.addEventListener("mouseover", () => {
        if (colour == "gray") {
            box.style.backgroundColor = "gray";
        } else {
            let red = pickRandomNumber();
            let green = pickRandomNumber();
            let blue = pickRandomNumber();
            box.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`
        }
    });
});

const sizeBtn = document.querySelector(".sizeBtn");
sizeBtn.addEventListener("click", () => {
    let size = prompt("Enter new size for grid: ");
    size = parseInt(size);

    // Input validation, size must be non-negative and not exceed 100
    if (size < 1 || size > 100) {
        alert("Value must be between 1 and 100");
        return;
    }

    const container = document.querySelector(".container");
    // Removes the current grid from the DOM
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Creates new grid
    createGrid(size);

    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.addEventListener("mouseover", () => {
            if (colour == "gray") {
                box.style.backgroundColor = "gray";
            } else {
                let red = pickRandomNumber();
                let green = pickRandomNumber();
                let blue = pickRandomNumber();
                box.style.backgroundColor = `rgb(${red}, ${blue}, ${green})`
            }
        });
    });
});

let colour = "gray";

const rgb = document.querySelector(".RGB");
rgb.addEventListener("click", () => {
    colour = "rainbow";
});

const greyButton = document.querySelector(".boringBtn");
greyButton.addEventListener("click", () => {
    colour = "gray";
});

function pickRandomNumber() {
    return Math.floor(Math.random() * 256);
}