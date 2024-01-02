const generateButton = document.querySelector('#generate');
let gridGenerate = 0;

generateButton.addEventListener('click', function generateGrid (){
    const grid = document.querySelector('#grid');

    console.log(generateGrid);
    if(gridGenerate == 0){
        for(let i =0; i< 16; i++){
            for(let j = 0; j < 16; j++){
                let cell = document.createElement('div');
                cell.classList.add('cell');
                cell.addEventListener('mouseover', function(){
                    this.style.backgroundColor = 'black';
                });
                grid.appendChild(cell);
            }
        }
    }
    generateButton.textContent= "Regenerate Grid";
    
    if(gridGenerate == 1){
        let modifyCell = document.querySelectorAll('.cell');
        for(let i = 0; i < modifyCell.length; i++){
            modifyCell[i].style.backgroundColor = 'white';
        }
    }
    gridGenerate = 1;
    console.log(gridGenerate);
});

