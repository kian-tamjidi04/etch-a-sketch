// TODO: CREATE A FUNCTION THAT CREATES DIVS FOR THE
// 16X16 GRID
function createGrid() {
    // ADD DIVS 16 AT A TIME
    // MAYBE CREATE ANOTHER FUNCTION THAT CREATES LINES
    const box = document.createElement("div");
    box.style = "width: 50px; height: 50px";

    const line = document.createElement("div");
    line.style = "display: flex";

    for (let i = 0; i < 4; i++) {
        line.appendChild(box);
    }
}