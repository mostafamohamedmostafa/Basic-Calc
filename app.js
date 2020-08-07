function showTime() {
    let date = new Date();
    let hours = date.getHours();//0-23
    let minutes = date.getMinutes();//0-59
    let seconds = date.getSeconds();//0-59

    let formatHours = convertFormat(hours)
    hours = checkTime(hours);
document.getElementById('clock').innerHTML=`${hours}: ${minutes} : ${seconds} ${formatHours}`


}

function convertFormat(time) {
    let format = 'AM'
    if (time >= 12) {
        format = 'PM'
    }
    return format;
}

function checkTime(time) {
    if (time > 12) {
        time = time - 12;
    }

    if (time ===0 ){
        time = 12;
    }
    return time; 
}

showTime();
setInterval(showTime,1000);



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