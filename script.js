var slider = document.getElementById("slider");
var upArrow = document.getElementById("upArrow");
var downArrow = document.getElementById("downArrow");
let x = 0;
upArrow.onclick = function () {
    if(x > "-900"){
        x = x - 300;
        slider.style.top = x + "px";
    }
    

}
downArrow.onclick = function () {
    if(x < 0){
        x = x + 300;
        slider.style.top = x + "px";
    }
    

}