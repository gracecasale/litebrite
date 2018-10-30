// console.log("It is working!"); 

//variables
const board = document.querySelector('.board');
const cells = board.querySelectorAll('.cell');
const colorSelector = document.querySelector('.color-selector');
const resetBtn = document.querySelector('.reset');
let currentColor = '#ff0000';

 
//events
resetBtn.addEventListener('click', reset);

cells.forEach(function attachCellListener(cell){
    cell.addEventListener('click', onCellClick); 
}); 

colorSelector.addEventListener("input", onColorSelect);


//functions
function onCellClick(event){
    const element = event.target;
    element.style.backgroundColor = currentColor;
}

function onColorSelect(event){
    const element = event.target;
    currentColor = (element.value); 
}

function reset (event) {
    location.reload();
}


//kick it off