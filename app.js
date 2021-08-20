const nums = Array.from(document.querySelectorAll('#numbers>div'));
const display = document.querySelector('#display')
const input = document.querySelector('#input')
const backSpace = document.querySelector('#backspace')
const sciBtns = Array.from(document.querySelectorAll('#sci>div'))

const operations = Array.from(document.querySelectorAll('#operations>div>div'))
var result = '';
nums.forEach(num => {
    num.addEventListener('click', () => {
        if (input.textContent != '0') {
            input.textContent += num.textContent;
            result = input.textContent
        } else {
            input.textContent = num.textContent;
            result = input.textContent
        }

    })
})
sciBtns.forEach(sciBtn => {
    sciBtn.addEventListener('click', () => {
        console.log(result);
        if (sciBtn.textContent == 'sin') {
            if (input.textContent != '0') {
                input.textContent = 'sin(' + input.textContent + ')';
                result = 'Math.sin(' + eval(result) + ')';
            } else {
                input.textContent = 'sin(0)';
                result = 'Math.sin(0)'
            }
        } else if (sciBtn.textContent == 'cos') {
            if (input.textContent != '0') {
                input.textContent = 'cos(' + input.textContent + ')';
                result = 'Math.cos(' + eval(result) + ')';
            } else {
                input.textContent = 'cos(0)';
                result = 'Math.cos(0)'
            }
        } else if (sciBtn.textContent == 'tan') {
            if (input.textContent != '0') {
                input.textContent = 'tan(' + input.textContent + ')';
                result = 'Math.tan(' + eval(result) + ')';
            } else {
                input.textContent = 'tan(0)';
                result = 'Math.tan(0)'
            }
        } else if (sciBtn.textContent == 'log') {
            if (input.textContent != '0') {
                input.textContent = 'log(' + input.textContent + ')';
                result = 'Math.log(' + eval(result) + ')';
            } else {
                input.textContent = 'log(0)';
                result = 'Math.log(0)'
            }
        } else if (sciBtn.textContent == '^2') {
            input.textContent = '(' + input.textContent + ')^2';
            console.log(result);
            result = eval(result) ** 2
            console.log(result)

        } else if (sciBtn.textContent == ')') {
            input.textContent += ')';
            result += ')'
        } else if (sciBtn.textContent == '(') {
            input.textContent += '(';
            result += '('

        } else if (sciBtn.textContent == 'π') {
            if (input.textContent != '0') {
                input.textContent += '3.14159265359';
                result += '*3.14159265359'


            } else {
                input.textContent = '3.14159265359';
                result = '3.14159265359'

            }


        } else if (sciBtn.textContent == 'e') {
            if (input.textContent != '0') {
                input.textContent += '2.71828';
                result = '*2.71828'
            } else {
                input.textContent = '2.71828';
                result = '2.71828'
            }


        }
    })
})
operations.forEach(operation => {
    operation.addEventListener('click', () => {
        if (operation.textContent == 'AC') {
            input.textContent = 0
            display.style.background = 'rgb(189, 199, 202)'
            setTimeout(() => {
                display.style.background = 'white'
            }, 100)
        } else if (operation.textContent == '=') {
            console.log(result);
            input.textContent = eval(result);
            display.style.background = 'rgb(189, 199, 202)'
            setTimeout(() => {
                display.style.background = 'white'
            }, 100)
        } else if (operation.textContent == '+') {
            let inputval = input.textContent
            console.log(inputval.charAt(inputval.length - 1))
            if (inputval.charAt(inputval.length - 1) != '+' && inputval != '') {
                if (inputval.charAt(inputval.length - 1) != '-') {
                    input.textContent += '+';
                    result += '+'
                } else {
                    input.textContent = input.textContent.slice(0, inputval.length - 1);
                    input.textContent += '+'
                    result += '+'
                }
            }
        } else if (operation.textContent == '-') {
            let inputval = input.textContent
            if (inputval.charAt(inputval.length - 1) != '-' && inputval != '') {
                if (inputval.charAt(inputval.length - 1) != '+') {
                    input.textContent += '-';
                    result += '-'
                } else {
                    input.textContent = input.textContent.slice(0, inputval.length - 1);
                    input.textContent += '-'
                    result += '-'
                }
            }
        } else if (operation.textContent == 'x') {
            let inputval = input.textContent
            if (inputval.charAt(inputval.length - 1) != '*' && inputval != '') {
                if (inputval.charAt(inputval.length - 1) != '/') {
                    input.textContent += '*';
                    result += '*'
                } else {
                    input.textContent = input.textContent.slice(0, inputval.length - 1);
                    input.textContent += '*'
                    result += '*'
                }
            }

        } else if (operation.textContent == '÷') {
            let inputval = input.textContent
            if (inputval.charAt(inputval.length - 1) != '/' && inputval != '') {
                if (inputval.charAt(inputval.length - 1) != '*') {
                    input.textContent += '/';
                    result += '/'
                } else {
                    input.textContent = input.textContent.slice(0, inputval.length - 1);
                    input.textContent += '/'
                    result += '/'
                }
            }

        }
    })
})
backSpace.addEventListener('click', () => {
    let calcLen = input.textContent.length
    if (input.textContent == 'NaN') {
        input.textContent = 0;
    } else {
        input.textContent = input.textContent.slice(0, calcLen - 1);
    }



})