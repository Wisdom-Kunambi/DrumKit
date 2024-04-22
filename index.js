document.querySelectorAll('.drum').forEach(button => button.addEventListener('click', handleClick));

function handleClick() {
    

    let buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
        case 'w':
            var audio = new Audio('./sounds/tom-1.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('./sounds/tom-2.mp3');
            audio.play();
            break;
        case 's':
            var audio = new Audio('./sounds/tom-3.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('./sounds/tom-4.mp3');
            audio.play();
            break;
        case 'j':
            var audio = new Audio('./sounds/snare.mp3');
            audio.play();
            break;
        case 'k':
            var audio = new Audio('./sounds/crash.mp3');
            audio.play();
            break;
        case 'l':
            var audio = new Audio('./sounds/kick-bass.mp3');
            audio.play();
            break;
        default:
    }


}


// function add(x, y) {
//     return x + y;
// }

// function subtract(x, y) {
//     return x - y;
// }

// function multiply(x, y) {
//     return x * y;
// }

// function divide(x, y) {
//     return x / y;
// }

// function operate(operator, x, y) {
//     if (operator === 'add') {
//         return add(x, y);
//     } else if (operator === 'subtract') {
//         return subtract(x, y);
//     } else if (operator === 'multiply') {
//         return multiply(x, y);
//     } else if (operator === 'divide') {
//         return divide(x, y);
//     }
// }

// console.log(operate('multiply', 1, 2));

