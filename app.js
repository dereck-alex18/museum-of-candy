let navBar = document.querySelector('#mainNav');

//Then the event scroll is fired, the code bellow will check the position of the scroller.
//If it is grater than 0 the bg of the navBar will change
document.addEventListener("scroll", () => {
    let scroll = this.scrollY;
    if(scroll === 0){
        navBar.classList.remove("changeBgColor");
    }else{
        navBar.classList.add("changeBgColor");
    }
});