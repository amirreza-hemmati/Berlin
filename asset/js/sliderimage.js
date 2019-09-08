const el = document.getElementsByClassName("portfolio__img_item");
const fixed = document.getElementsByClassName("image-sliding")[0];
const parentImage = document.getElementsByClassName("image-sliding__image")[0];
const BtnChangeImg1 = document.getElementsByClassName("image-sliding__chang-icon")[0];
const BtnChangeImg2 = document.getElementsByClassName("image-sliding__chang-icon")[1];
const spnNumber = document.querySelector("#spn-number");
const images = document.getElementsByClassName("image-slider")[0];
const removebtn = document.querySelector(".image-sliding__image_remove-icon");

removebtn.addEventListener("click",()=> {
    fixed.style.display = "none";
})

for(let index = 0 ; index < el.length ; ++index){
    el[index].addEventListener("click",(e) => {
        fixed.style.position = "fixed";
        fixed.style.display = "flex";
        images.src = `asset/imgs/work-${(index + 1)}.jpg`;
        // parentImage.style.opacity = "1";
        spnNumber.innerHTML = `${index + 1} of 6`;
        images.setAttribute("data",(index + 1));
    });
}

images.addEventListener("click",()=> {
    BtnChangeImg2.click();
})

parentImage.addEventListener("click",(e) => {
    e.stopPropagation();
})

fixed.addEventListener("click",(e)=>{
    e.stopPropagation();
    fixed.style.display = "none";
})

BtnChangeImg1.addEventListener("click",(e) => {
    e.stopPropagation();
    let i = parseInt(images.getAttribute("data"));
    --i;
        if(i < 1){
            i = 6;
        }
    // console.log(i)
    spnNumber.innerHTML = `${i} of 6`;
    images.src = `asset/imgs/work-${(i)}.jpg`;
    images.setAttribute("data",(i));
})


BtnChangeImg2.addEventListener("click",(e) => {
    e.stopPropagation();
    e.stopPropagation();
    let i = parseInt(images.getAttribute("data"));
    ++i;
        if(i > 6){
            i = 1;
        }
    // console.log(i)
    spnNumber.innerHTML = `${i} of 6`;
    images.src = `asset/imgs/work-${(i)}.jpg`;
    images.setAttribute("data",(i));
})
