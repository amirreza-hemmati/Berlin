/*
    start the animation
*/
const animationa = document.querySelector(".animation-start__container_width");
setTimeout(() => {
    animationa.style.margin = "0 0";
    animationa.style.width = "100%";
    animationa.style.height = "100%";
    animationa.style.transition = "height 2s";
    setTimeout(() => {
        const animation2 = document.querySelector(".animation-start");
        animation2.style.transition = "opacity 2s";
        animation2.style.opacity = "0";
    }, 2000);
}, 5800 );