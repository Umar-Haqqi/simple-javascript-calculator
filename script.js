const screen = document.querySelector('.screen');
const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.classList.contains('clear')) {
            screen.innerHTML = '';
        }
        else if (button.classList.contains('equal')) {
            screen.innerHTML = eval(screen.innerHTML);
        }
        else if (screen.innerHTML === '') {
            screen.innerHTML = button.innerHTML;
        }
        else {
            screen.innerHTML += button.innerHTML;
        }
    });
});
