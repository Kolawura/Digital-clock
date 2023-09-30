

setInterval(() => {
    let time = new Date(),
    clock = document.querySelector('.clock'),
    hr = time.getHours(),
    min = time.getMinutes(),
    sec = time.getSeconds(),
    day = 'AM';

    if(hr > 12){
        day = 'PM';
        hr = hr - 12;
    }
    if(hr == 0){
        hr = 12;
    }
    if(hr < 10){
        hr = '0'+ hr;
    }
    if(min < 10){
        min = '0'+ min;
    }
    if(sec < 10){
        sec = '0'+ sec;
    }
    clock.textContent = `${hr} : ${min} : ${sec} ${day}`;
});