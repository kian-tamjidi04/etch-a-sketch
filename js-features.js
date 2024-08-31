// Creates the grid that will be used
function createGrid() {
    const createBox = () => {
        const box = document.createElement("div");
        box.className = "box";
        box.style = "width: 20px; height: 20px; background-color: white; border-color: black; border-width: 5px; border-style: solid";    
        return box;
    };

    const createLine = () => {
        const line = document.createElement("div");
        line.style = "display: flex";
    
        // Each line contains 16 boxes
        for (let i = 0; i < 16; i++) {
            line.appendChild(createBox());
        }

        return line;
    }

    const gridContainer = document.querySelector(".container");
    gridContainer.style = "display: flex; flex-direction: column"
    for (let i = 0; i < 16; i++) {
        gridContainer.appendChild(createLine());
    }
}

createGrid();

const boxes = document.querySelectorAll(".box");
boxes.forEach(box => {
    box.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor = "grey";
    });
});