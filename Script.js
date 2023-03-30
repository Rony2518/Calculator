// Define the functions to handle user input


function Solve(val) {
    var v = document.getElementById('answer');
    v.value += val;
}

function clearInput() {
    document.getElementById('answer').value = '0';
}

function Back() {
    var ev = document.getElementById('answer');
    ev.value = ev.value.slice(0, -1);
}

function calculate() {
    let answer = document.getElementById('answer').value;
    let result = eval(answer);
    document.getElementById('answer').value = result;
}

// Bind the functions to the buttons
document.querySelectorAll('input[type=button]').forEach(function (button) {
    button.addEventListener('click', function () {
        if (button.value === '=') {
            calculate();
        } else if (button.value === 'AC') {
            clearInput();
        } else if (button.value === '<') {
            back();
        } else {
            appendInput(button.value);
        }
    });
});
