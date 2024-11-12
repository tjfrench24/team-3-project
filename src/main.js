const printMe = (i, j) => {
    console.log("You clicked on (" + (i + 1) + ", " + (j + 1) + ")");
  };
  
const build = () => {
    const numCols = 7,
    numRows = 5,
    theGrid = document.getElementById("theGrid");
  
    for (let i = 0; i < numRows; i++) {
        for(let j = 0; j < numCols; j++) {
            let square = document.createElement("div");
            let day = 7 * i + j
            let text = document.createTextNode(String(day % 31 + 1));
            square.appendChild(text);

            square.classList.add("grid-item")
            square.classList.add("white")
            square.onclick = function() {
            }
            theGrid.appendChild(square);
        } 
    }
};
  
build();
  