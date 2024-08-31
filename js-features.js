// Creates the grid that will be used
function createGrid(n) {
    const createBox = () => {
        const box = document.createElement("div");
        box.className = "box";
        box.style = "padding: 20px; background-color: white; border-color: black; border-width: 5px; border-style: solid";    
        return box;
    };

    const createLine = () => {
        const line = document.createElement("div");
        line.style = "display: flex";
    
        // Each line contains n boxes
        for (let i = 0; i < n; i++) {
            line.appendChild(createBox());
        }

        return line;
    }

    const gridContainer = document.querySelector(".container");
    gridContainer.style = "display: flex; flex-direction: column"
    for (let i = 0; i < n; i++) {
        gridContainer.appendChild(createLine());
    }
}

createGrid(16);

const boxes = document.querySelectorAll(".box");
boxes.forEach(box => {
    box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "grey";
    });
});

const sizeBtn = document.querySelector(".sizeBtn");
sizeBtn.addEventListener("click", () => {
    let size = prompt("Enter new size for grid: ");
    size = parseInt(size);
    if (size < 1 || size > 100) {
        alert("Value must be between 1 and 100");
        return;
    }

    const container = document.querySelector(".container");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createGrid(size);

    const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.addEventListener("mouseover", () => {
            box.style.backgroundColor = "grey";
    });
});
});