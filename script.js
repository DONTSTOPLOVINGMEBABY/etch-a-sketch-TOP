const container = document.querySelector(".container");
const grid = document.querySelector(".grid");
const slider = document.getElementById("myRange");
const output = document.getElementById("slidervalue");
const button = document.getElementById("reset-button");



function make_grid (grid_size) {

    let array = Array() ; 

    grid.style.gridTemplateColumns = `repeat(${grid_size}, ${400/grid_size}px)`;
    grid.style.gridTemplateRows = `repeat(${grid_size}, ${400/grid_size}px)`;

    for (let i = 0 ; i < (grid_size * grid_size) ; i++){
        array[i] = document.createElement('div');
        array[i].classList.add("cell");
        grid.append(array[i]);
        array[i].setAttribute('id', `${i}`)
    }
}

function draw () {
    const cells = document.querySelectorAll(".cell");

    cells.forEach( (cell) => {

        cell.addEventListener('mouseenter', () => {
            if (cell.style.backgroundColor != 'black'){cell.style.cssText = "background-color: black;";}
            //else {cell.style.cssText = "background-color: white"};  !!! this will change the color back to white if square is hovered over again
        });

    });
}


function startup (grid_size=16) {
    make_grid(grid_size);
    draw() ;    
    output.textContent = `${grid_size} x ${grid_size}`; 
}

slider.oninput = function () {
    reset();
    startup(this.value);
    output.textContent = `${this.value} x ${this.value}`;
}

function reset() {
    while (grid.firstChild) grid.removeChild( grid.firstChild );
}

startup();
button.addEventListener('click', () => {
    reset();
    startup(slider.value);
})