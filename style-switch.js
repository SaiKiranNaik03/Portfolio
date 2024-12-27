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
    if (color === "color-5") {
        let res = genColor();
        if(res == "rgb(242, 242, 252)" || res == "rgb(21, 21, 21)"){
            res = genColor();
        }
        document.documentElement.style.setProperty('--skin-color', res);
    } else {
        document.documentElement.style.removeProperty('--skin-color');
    }
    changeStyle.forEach((style) => {
        if (color === style.getAttribute("title")) {
            style.removeAttribute("disabled");
        } else {
            style.setAttribute("disabled", "true");
        }
    });

}

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