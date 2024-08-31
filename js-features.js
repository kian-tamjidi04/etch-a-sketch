// TODO: CREATE A FUNCTION THAT CREATES DIVS FOR THE
// 16X16 GRID

// error: only one single box being rendered, which means each line contains either
// one box of boxes stacked on top of each other
function createGrid() {
    const createBox = () => {
        const box = document.createElement("div");
        box.style = "width: 20px; height: 20px; background-color: gray; border-color: black; border-width: 5px; border-style: solid";    
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