const days = document.querySelector("#days");
const hours = document.querySelector("#hours");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

const cyear=new Date().getFullYear();
const  newyear = new Date( `january 1 ${cyear+1} 00:00:00`);
function counter(){
const cyear=new Date();
const diff= newyear-cyear;
const d = Math.floor(diff/1000/60/60/24);
const h = Math.floor(diff/1000/60/60)%24;
const m = Math.floor(diff/1000/60)%60;
const s = Math.floor(diff/1000)%60;


days.innerHTML =d<10?"0"+d:d;
hours.innerHTML =h<10?"0"+h:h;
min.innerHTML =m<10?"0"+m:m;
sec.innerHTML =s<10?"0"+s:s;
 
}
setInterval(counter ,1000);