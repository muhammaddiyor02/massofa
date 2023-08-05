var elInp = document.querySelector('.inp')
var elTi = document.querySelector('.speed__card__text_')    
var elTit = document.querySelector('.speed__card__text-')
var elTitl = document.querySelector('.speed__card__textd')
var elTitle = document.querySelector('.speed__card__textt')





function func() {
   
    elTi.textContent = calculateTime( elInp.value , 4)
    elTit.textContent =  calculateTime(elInp.value , 20)
   elTitl.textContent =   calculateTime(elInp.value , 100)
    elTitle.textContent =  calculateTime(elInp.value , 800)


}
function calculateTime(distance, speed){
    var hour = Math.floor(distance / speed);
    var minute = Math.floor((distance / speed - hour) * 60);
    var second = Math.floor(((distance / speed - hour) * 60 - minute)*60);
    return hour + "soat" + minute + "minut" + second + "second";


}