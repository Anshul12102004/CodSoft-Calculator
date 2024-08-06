function tp(value) {
    document.getElementById('top').innerText += value;
}

function clr() {
    document.getElementById('top').innerText = '';
}

function del() {
    const display = document.getElementById ('top');
    display.innerText = display.innerText.slice(0, -1);
}

function res() {
    try {
        const display = document.getElementById('top');
        display.innerText = eval (display.innerText);
    } catch {
        display.innerText = 'syntax error';
    }
}
