let clock = document.getElementById("clock")
let date = document.getElementById("day")


setInterval(function showTime() {
    const time = new Date();
    const today = time.toDateString()
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    // const myTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    // clock.innerText = myTime
    document.getElementById("hr").innerText=`${hours.toString().padStart(2, '0')} :`
    document.getElementById("min").innerText=`${minutes.toString().padStart(2, '0')} :`
    document.getElementById("sec").innerText=`${seconds.toString().padStart(2, '0')}`
    date.innerText = today
},1000)
showTime()


