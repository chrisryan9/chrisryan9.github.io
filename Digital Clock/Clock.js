const displayTime = () => {
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();
    let session = document.getElementById('session');

    if(hrs >= 12) {
        session.innerHTML = 'PM';
    } else {
        session.innerHTML = 'AM';
    }

    if(hrs > 12) {
        hrs = hrs - 12;
    };

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
};

setInterval(displayTime, 10);

const updateClock = () => {
    let now = new Date();
    let dname = now.getDay();
        mo = now.getMonth();
        dnum = now.getDate();
        yr = now.getFullYear();
        hou = now.getHours();
        min = now.getMinutes();
        sec = now.getSeconds();
        pe = 'AM'

        let months = ['Janurary', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let ids = ['dayname', 'month', 'daynum', 'year', 'hours', 'minutes', 'seconds', 'session'];
        let values = [week[dname], months[mo], dnum, yr, hou, min, sec, pe];

        for(let i = 0; i < ids.length; i++)
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}


const initClock = () => {
    updateClock();
}