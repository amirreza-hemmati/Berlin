// var
const section1 = document.querySelector(".main__about");
const phoneMenu = document.getElementsByClassName("nav__logo_menu-phone")[0];
const navMenu = document.getElementsByTagName("nav")[0];
const navItem = document.getElementsByClassName("nav-item");
const navLink = document.getElementsByClassName("nav-link");
let yScroll = document.getElementsByClassName("y-scroll");
const animationa = document.getElementsByClassName("animation-start__container_width")[0];


/*
    start the animation
*/
class mAnimations {
  constructor() {
    this.iconScroll = document.querySelector(".header__scroll-down");
  }

  loader() {
    setTimeout(() => {
      animationa.style.margin = "0";
      animationa.style.width = "100%";
      animationa.style.height = "100%";
      animationa.style.transition = "height 2s";

      setTimeout(() => {
        const animation2 = document.querySelector(".animation-start");
        animation2.style.transition = "2s";
        animation2.style.opacity = "0";
        setTimeout(() => {
          animation2.style.display = "none";
        }, 2000);
      }, 2000);
    }, 5800);
  }

  iconScrollDown() {
    this.iconScroll.addEventListener("click", () => {
      setTimeout(() => {
        this.scrollInterValMenu(2, 4);
      }, 150);
    });
  }

  scrollInterValMenu(timeScroll, lengthScroll = 1) {
    setTimeout(() => {
      let stops = setInterval(() => {
        let i = 0;
        while (i <= lengthScroll) {
          window.scrollBy(0, 1);
          i++;
        }
        if (window.scrollY >= section1.offsetTop) {
          clearInterval(stops);
        }
      }, timeScroll);
    }, 100);
  }
}

window.addEventListener("load", () => {
  const animations = new mAnimations();
  animations.loader();
  animations.iconScrollDown();
});

window.addEventListener("scroll", e => {
  if (
    window.scrollY >= document.getElementsByTagName("header")[0].offsetHeight
  ) {
    document.getElementsByTagName("nav")[0].style.top = "0";
  } else {
    navMenu.classList.remove("toggle-menu");
    document.getElementsByTagName("nav")[0].style.top = "-20%";
  }
});

class wMenu {
  static toggleMenuPhone() {
    navMenu.classList.toggle("toggle-menu");
  }

  static boldItem(index = 0, scrolly = section1, speed = 1) {
    console.log(navItem);
  }

  static animationScroll(lengthScroll, sectionScroll, timeScroll , menha = 0) {
    setTimeout(() => {
      if (window.scrollY < sectionScroll) {
        let stops = setInterval(() => {
          let i = 0;
          while (i <= lengthScroll) {
            window.scrollBy(0, 1);
            i++;
          }
          if (window.scrollY >= (sectionScroll - menha)) {
            clearInterval(stops);
          }
        }, timeScroll);
      } else {
        let stops = setInterval(() => {
          let i = 0;
          while (i <= lengthScroll) {
            window.scrollBy(0, -1);
            i++;
          }
          if (window.scrollY <= sectionScroll) {
            clearInterval(stops);
          }
        }, timeScroll);
      }
    }, 100);
  }

  static toggleColorScroll(index){
        if(
        window.scrollY > yScroll[index].offsetTop 
            &&
        window.scrollY < (yScroll[index].offsetHeight + yScroll[index].offsetTop)
        )
        {
            navLink[index].style.color = "#afafaf";
        }else{
            navLink[index].style.color = "#000000";
        }
  }
}

phoneMenu.addEventListener("click", () => {
  wMenu.toggleMenuPhone();
});

for (let index = 0; index < navLink.length; index++) {
  const element = navLink[index];
  element.addEventListener("click", e => {
    e.preventDefault();
  });
}

for (let index = 0; index < navItem.length; index++) {
  const element = navItem[index];

  element.addEventListener("click", e => {
    e.preventDefault();
    wMenu.toggleMenuPhone();
    setTimeout(() => {
      wMenu.animationScroll(15, yScroll[index].offsetTop , 1);
    }, 200);
  });
}

window.addEventListener("scroll",() => {
    for(let index = 0; index < navLink.length ; ++index){
        wMenu.toggleColorScroll(index);
    }
})

// for (let index = 0; index < navlink.length; index++) {
//     navLink[index].addEventListener("click",(e) => {
//         navLink[index].style.color="#afafaf"
//     });
// }