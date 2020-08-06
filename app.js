const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalBtn = document.querySelector('.btn-equal');
const clearBtn = document.querySelector('.btn-clear');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
        let number = btns[i].getAttribute('data-num');
        screen.value += number;
    })
}

equalBtn.addEventListener('click', function () {
    if (screen.value === '') {
        alert('Please Enter a Number');
    }
    else {
        let valuee = eval(screen.value);
        screen.value = valuee;
        }

    }

)

clearBtn.addEventListener('click', function () {
    screen.value = '';
})