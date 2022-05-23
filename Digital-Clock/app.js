setInterval(() => {
    const time = document.querySelector('#time');

    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

        let day_night = 'AM';

    if(hour > 12){
        hour = hour - 12;
        day_night = 'PM';
    }
    if(hour < 10){
        hour = '0' + hour;
    }
    if(minute < 10){
        minute = '0' + minute;
    }
    if(second < 10){
        second = '0' + second;
    }


    time.textContent = hour + ':' + minute + ':' + second + ' ' + day_night;  
})