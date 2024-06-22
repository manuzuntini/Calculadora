document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('button'));

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            handleInput(value);
        });
    });

    document.addEventListener('keydown', function(event) {
        const key = event.key;

        if ((key >= '0' && key <= '9') || key === '+' || key === '-' || key === '*' || key === '/' || key === 'Enter' || key === 'Backspace') {
            if (key === 'Enter') {
                handleInput('=');
            } else if (key === 'Backspace') {
                handleInput('C');
            } else {
                handleInput(key);
            }
        }
    });

    function handleInput(value) {
        if (value === 'C') {
            display.innerText = '0';
        } else if (value === '=') {
            try {
                display.innerText = eval(display.innerText);
            } catch {
                display.innerText = 'Error';
            }
        } else {
            if (display.innerText === '0' || display.innerText === 'Error') {
                display.innerText = value;
            } else {
                display.innerText += value;
            }
        }
    }
});
