const days=document.getElementById("days");
const hours=document.getElementById("hours");
const minites=document.getElementById("minites");
const seconds=document.getElementById("seconds");

const curentyear=new Date().getFullYear()
console.log(curentyear);
const nextyear=curentyear+1;
console.log(nextyear)

let newYearTime=new Date(`January 01 ${nextyear} 00:00:00:`);

function update()
{
    const curentTime=new Date();
    const diff =newYearTime-curentTime;
    console.log(diff);

    let d= Math.floor(diff/1000/60/60/24);
    let h= Math.floor(diff/1000/60/60) % 24;
    let m= Math.floor(diff/1000/60) % 60;
    let s= Math.floor(diff/1000) % 60;

    days.innerHTML=d;
    hours.innerHTML=h;
    minites.innerHTML=m;
    seconds.innerHTML=s;

}

setInterval(update,1000);

