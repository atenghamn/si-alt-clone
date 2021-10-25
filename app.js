const grid = document.querySelector('.grid')
let currentShooterIndex = 202; // Place it in the middle of the gameboard
let width = 15


// Fill the gameboard with squares
for (let i= 0; i < 225; i++){
    const square = document.createElement('div')
    grid.appendChild(square)
}

// Makes an array of att the squares in the grid
const squares = Array.from(document.querySelectorAll('.grid div'))

// Array of Aliens 
const alienInvaders = [
    0,1,2,3,4,5,6,7,8,9,
    15,16,17,18,19,20,21,22,23,24,
    30,31,32,33,34,35,36,37,38,39
]

// Draw the aliens on the gameboard
function draw() {
    for (let i = 0; i < alienInvaders.length; i++) {
        squares[alienInvaders[i]].classList.add('invader')
    }
}

draw()


// Draw the shooter 
squares[currentShooterIndex].classList.add('shooter')

// Shooters movement
function moveShooter(e){
    squares[currentShooterIndex].classList.remove('shooter')
    switch(e.key) {
        case 'ArrowLeft' :
            if(currentShooterIndex % width !== 0) currentShooterIndex -=1;
            break

        case 'ArrowRight' : 
            if(currentShooterIndex % width < width -1) currentShooterIndex +=1;
            break
    }

    squares[currentShooterIndex].classList.add('shooter')
}

document.addEventListener('keydown', moveShooter)