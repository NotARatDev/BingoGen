const generateButton = document.querySelector("#generateButton");
const clearButton = document.querySelector("#clearButton");
const editButton = document.querySelector("#editButton");
const tableBody = document.querySelector("tbody");
const rowInput = document.getElementById("rows");
const columnInput = document.getElementById("columns");

let rowCount = 3;
let columnCount = 3;
let editing = false;

rowInput.addEventListener("keyup", setRows);
columnInput.addEventListener("keyup", setColumns);
function setRows() {
  if (rowInput.value > 5) {
    rowCount = 5;
    alert("The max number of rows is 5");
  } else if (rowInput.value > 0) {
    rowCount = rowInput.value;
  }
}
function setColumns() {
  if (columnInput.value > 5) {
    columnCount = 5;
    alert("The max number of columns is 5");
  } else if (columnInput.value > 0) {
    columnCount = columnInput.value;
  }
}

function generateTable() {
  tableBody.innerHTML = " ";
  for (let i = 0; i < rowCount; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < columnCount; j++) {
      const cell = document.createElement("td");
      cell.textContent = "Cell " + (i * columnCount + j + 1);
      cell.addEventListener("click", handleCellClick); // Add event listener
      row.appendChild(cell);
    }
    tableBody.appendChild(row);
  }
  editButton.textContent = "Editing Off";
  editing = false;
}

function clearTable() {
  const cells = document.querySelectorAll("td");
  cells.forEach((cell) => {
    cell.textContent = "";
  });
}

function editTable() {
  editing = !editing;
  if (editing === true) {
    const cells = document.querySelectorAll("td");
    cells.forEach((cell) => {
      cell.setAttribute("contenteditable", true);
    });
  } else {
    const cells = document.querySelectorAll("td");
    cells.forEach((cell) => {
      cell.setAttribute("contenteditable", false);
    });
  }
  if (editing) {
    editButton.textContent = "Editing On";
  } else {
    editButton.textContent = "Editing Off";
  }
}

function handleCellClick() {
  if (editing !== true) {
    const cell = event.target;
    cell.classList.toggle("crossed-off");
  }
}

generateButton.onclick = generateTable;
clearButton.onclick = clearTable;
editButton.onclick = editTable;
