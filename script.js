const container = document.querySelector(".container");
const grid = document.querySelector(".grid");



function init_grid (grid_size) {

    let array = Array() ; 
    
    for (let i = 0 ; i < grid_size ; i++){
        array[i] = document.createElement('div');
        array[i].classList.add("cell");
        array[i].textContent = `${i}`; 
        grid.append(array[i]);
        array[i].setAttribute('id', `${i}`)
    }
}




init_grid(16)

