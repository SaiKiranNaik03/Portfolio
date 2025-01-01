// Switch Control
const styleSwitch = document.querySelector(".style-switcher-toggle");
const Switch = document.querySelector(".style-switcher");
styleSwitch.addEventListener("click",()=>{
    Switch.classList.toggle("open");
})

window.addEventListener("scroll",()=>{
    if(Switch.classList.contains("open")){
        Switch.classList.remove("open");
    }
})
// Random Color gen
function genColor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);

    let color=`rgb(${red},${green},${blue})`;

    return color;
}

// Color Chnage
const changeStyle = document.querySelectorAll(".alt-style");
function setActiveStyle(color) {
    let res ;
    switch(color){
        case 'ec1839':
            res="#ec1839";
            break;
        case '37b182':
            res = "#37b182";
            break;
        case 'fa5b0f':
            res = "#fa5b0f";
            break;
        case '1854b4':
            res = "#1854b4";
            break;
        case 'random':
            res = genColor();
            if(res == "rgb(242, 242, 252)" || res == "rgb(21, 21, 21)"){
                res = genColor();
            }
            break;
    }
    document.documentElement.style.setProperty('--skin-color', res);
    // if (color === "random") {
        
        
    //     document.documentElement.style.setProperty('--skin-color', res);
    // } else {
    //     document.documentElement.style.removeProperty('--skin-color');
    }
    // changeStyle.forEach((style) => {
    //     if (color === style.getAttribute("title")) {
    //         style.removeAttribute("disabled");
    //     } else {
    //         style.setAttribute("disabled", "true");
    //     }
    // });

// }

// Theme Chnage
const darkLight = document.querySelector(".day-night");

darkLight.addEventListener("click",()=>{
    darkLight.querySelector("i").classList.toggle("fa-sun");
    darkLight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
});

window.addEventListener("load",()=>{
    if(document.body.classList.contains("dark")){
        darkLight.querySelector("i").classList.add("fa-sun");
    }else{
        darkLight.querySelector("i").classList.add("fa-moon");
    }
})