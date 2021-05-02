var D = document.getElementById('big-display');
var d = document.getElementById('small-display');
var buttons = document.getElementById('buttons');


buttons.addEventListener('click', function Solve() {
    var x = D.value;
    var answer;

    if (event.target.name === 'sqrt') {
        D.value = '';
        d.value = "Square root equals " + (Math.sqrt(parseInt(x)));
    }
    if (event.target.value === 'CE') {
        D.value = '';
        d.value = '';
    }
    if (event.target.value === 'C') {
        D.value = '';
    }
    if (event.target.value === 'Tan') {
        D.value = '';
        d.value = "Tan equals " + (Math.tan(parseInt(x)))
    }
    if (event.target.value === 'Sin') {
        D.value = '';
        d.value = "Sin equals " + (Math.sin(parseInt(x)))
    }
    if (event.target.value === 'Cos') {
        D.value = '';
        d.value = "Cos equals " + (Math.cos(parseInt(x)))
    }
    if (event.target.value === 'ON') {
        D.value = '0';
        d.value = '0';
    }
    if (event.target.value === '%') {
        D.value = '';
        d.value = "Percentage equals " + (parseInt(x) / 100);
    }
    if (event.target.value === '1/x') {
        D.value = '';
        d.value = "Value equals " + (1 / parseInt(x));
    }
    if (event.target.value === '+/-') {
        D.value = '';
        d.value = "Value equals " + (parseInt(x) * (-1));
    }
    if (event.target.name === 'backspace') {
        D.value = D.value.substring(0, D.value.length - 1);
    }
    if (event.target.value === "+") {
        D.value += '+';
    }
    if (event.target.value === "-") {
        D.value += '-';
    }
    if (event.target.value === "*") {
        D.value += '*';
    }
    if (event.target.value === "/") {
        D.value += '/';
    }
    if (event.target.value === '=') {
        answer = d.value = "Value equals " + (eval(D.value));
    }
    if (event.target.value === "1") {
        D.value += 1;
    }
    if (event.target.value === "2") {
        D.value += 2;
    }
    if (event.target.value === "3") {
        D.value += 3;
    }
    if (event.target.value === "4") {
        D.value += 4;
    }
    if (event.target.value === "5") {
        D.value += 5;
    }
    if (event.target.value === "6") {
        D.value += 6;
    }
    if (event.target.value === "7") {
        D.value += 7;
    }
    if (event.target.value === "8") {
        D.value += 8;
    }
    if (event.target.value === "9") {
        D.value += 9;
    }
    if (event.target.value === "0") {
        D.value += 0;
    }
    if (event.target.value === ".") {
        D.value += '.';
    }

})

var closeApp = document.getElementById('close');

closeApp.addEventListener('click', (event) => {
    window.close()

})