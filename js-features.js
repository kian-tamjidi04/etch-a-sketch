// TODO: CREATE A FUNCTION THAT CREATES DIVS FOR THE
// 16X16 GRID

// error: only one single box being rendered, which means each line contains either
// one box of boxes stacked on top of each other
function createGrid() {
    const createBox = () => {
        const box = document.createElement("div");
        box.style = "width: 20px; height: 20px; background-color: blue; border-color: black; border-width: 5px; border-style: solid; padding: 20px";    
        return box;
    };

    const createLine = () => {
        const line = document.createElement("div");
        line.style = "display: flex; gap: 10px";
    
        // Each line contains 16 boxes
        for (let i = 0; i < 16; i++) {
            line.appendChild(createBox());
        }

        return line;
    }

    const gridContainer = document.querySelector(".container");
    gridContainer.style = "display: flex; gap: 10px; flex-direction: column"
    for (let i = 0; i < 16; i++) {
        gridContainer.appendChild(createLine());
    }
}

createGrid();