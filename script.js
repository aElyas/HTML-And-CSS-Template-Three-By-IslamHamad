
// const newyears = "1 jan 2023";


const displaydays = document.getElementById('days');
const displayhour = document.getElementById('hours');
const displayminute = document.getElementById('minutes');
const displaysecond = document.getElementById('seconds');

// program to get new Years date
const newyears = new Date();
newyears.setFullYear(newyears.getFullYear()+1, 0, 1); 
console.log(newyears);

//main logic 
function counter(){
    const currentdate = new Date();
    const totalseconds =  (newyears - currentdate)/1000;
    const days = Math.floor(totalseconds/3600/ 24);
    const hours = Math.floor(totalseconds/3600)%24;
    const minutes = Math.floor(totalseconds/60) %60;
    const seconds = Math.floor(totalseconds%60);
    displaydays.innerHTML = formatnumber(days);
    displayhour.innerHTML = formatnumber(hours);
    displayminute.innerHTML =formatnumber( minutes);
    displaysecond.innerHTML = formatnumber(seconds);  
}
function formatnumber(number){
    return number<10 ? ('0' + number):number;
}
  
setInterval(counter, 100);

