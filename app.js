// console.log("It is working!"); 

//variables
const board = document.querySelector('.board');
const cells = board.querySelectorAll('.cell');
const colorSelector = document.querySelector('.color-selector');
const controls = document.querySelector('.control');
let currentColor = 'black';
 
//events
cells.forEach(function attachCellListener(cell){
    cell.addEventListener('click', onCellClick); 
}); 
 
//functions
function onCellClick(event){
    const element = event.target;
    element.style.backgroundColor = currentColor;
}
 
//kick it off