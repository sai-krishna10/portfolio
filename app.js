( function(){
    var menunav=document.querySelector(".menu-nav");
    var menu=document.querySelector(".menu");
    var close=document.querySelector(".close");
    var nav=document.querySelector(".header");
    var navitems=document.querySelectorAll(".nav-item");

    menu.addEventListener("click",()=>{
        menunav.style.display="flex";
        nav.style.display="none";
    });
    close.addEventListener("click",()=>{
        menunav.style.display="none";
        nav.style.display="flex";
    })
    navitems.forEach(function (button) {
        button.addEventListener('click', function () {
            menunav.style.display="none";
            nav.style.display="flex";
        })
    })


})();
