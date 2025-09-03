/* 
I created my previous calculator with the help of a YouTube tutorial in which eval() was used.
I later learned that using eval() is dangerous in a real world context so I have opted for
another method. 95% of this was made with my own practical knowledge.
*/

const operatorOrNumberBtn = document.querySelectorAll('.number, .operator');
const display = document.querySelector('.display');

let firstNum = '';
let secondNum = '';
let operatorSelection;
const OPERATORS = ['+', '-', '*', '/'];

operatorOrNumberBtn.forEach(element => {
    element.addEventListener('click', () => {
        switch (true) {
            case element.value == 'clear':
                display.textContent = '';
                operatorSelection = null;
                firstNum = '';
                secondNum = '';
                return;
            case element.value == '=':
                if (operatorSelection != null && firstNum != '' && secondNum != '') {
                    operate();
                    return;
                }
                return;
            case element.value == 'back':
                if (operatorSelection != null && firstNum != '' && secondNum == '') {
                    operatorSelection = null;
                }
                else if (operatorSelection == null && firstNum != '' && secondNum == '') {
                    firstNum = firstNum.slice(0, -1);
                }
                else if (operatorSelection != null) {
                    secondNum = secondNum.slice(0, -1);
                }
                display.textContent = display.textContent.slice(0, -1);
                return;
            case OPERATORS.indexOf(element.value) != -1: // check for operator and if an operator has been selected and is NaN
                if (operatorSelection == null) {
                    operatorSelection = element.value;
                    display.textContent += element.textContent;
                    return;
                }
                else {
                    return;
                }
            case operatorSelection == null: // if operatorSelection is null, append value of display.value to firstNum
                firstNum += element.value;
                display.textContent += element.textContent;
                return;
            case operatorSelection != null && firstNum != '': // if operatorSelection is NOT null, append value of display.value to secondNum
                secondNum += element.value;
                display.textContent += element.textContent;
                return;
        }
    });
});

function operate() {
    firstNum = this.parseFloat(firstNum);
    secondNum = this.parseFloat(secondNum);
    
    switch (true) {
        case firstNum == 0 && operatorSelection == '/' && secondNum == 0:
            display.textContent = 'brah.';
            break;
        case operatorSelection == '+':
            display.textContent = firstNum + secondNum;
            break;
        case operatorSelection == '-':
            display.textContent = firstNum - secondNum;
            break;
        case operatorSelection == '*':
            display.textContent = firstNum * secondNum;
            break;
        case operatorSelection == '/':
            display.textContent = firstNum / secondNum;
            break;
    }
    firstNum = display.textContent; // The next calculation will use the result as firstNum
    secondNum = '';
    operatorSelection = null;
}

