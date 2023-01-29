tailwind.config = { }

 
const scroller = document.querySelector(".nav-wrap");
const firstDropDown = document.querySelectorAll(".first-dropdown");
scroller.addEventListener("scroll", checkScroll);
var s = getComputedStyle(document.getElementById('nav-wrap'))
  function checkScroll() {
      for (let i = 0; i < firstDropDown.length; i++) {
        if(s.direction=="ltr"){
          firstDropDown[i].style.transform ="translateX(-" + scroller.scrollLeft + "px)"  ;
        }
       else if(s.direction=="rtl"){
        firstDropDown[i].style.transform ="translateX(+" + scroller.scrollLeft * (-1) + "px)"  ;
    }
}
}