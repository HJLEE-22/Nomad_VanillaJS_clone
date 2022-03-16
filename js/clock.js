const clock = document.querySelector("h2#clock");


function getClock(){
    const getHours =  String(new Date().getHours()).padStart(2,"0");
    const getMinutes = String(new Date().getMinutes()).padStart(2,"0");
    const getSeconds = String(new Date().getSeconds()).padStart(2,"0");
    // new Date()와 Date.now() 차이?
    clock.innerText = `${getHours}:${getMinutes}:${getSeconds}`
}


getClock();
setInterval(getClock, 1000);