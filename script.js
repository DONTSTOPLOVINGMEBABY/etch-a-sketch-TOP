const container = document.querySelector(".container");
const grid = document.querySelector(".grid");



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
            //else {cell.style.cssText = "background-color: white"};
        });

    });
}


let grid_size = 17;

make_grid(grid_size);
draw() ;
