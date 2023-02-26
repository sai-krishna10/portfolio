(function () {
    var open = document.querySelector(".open-menu");
    var navbar = document.querySelector(".navbar");
    var close = document.querySelector(".close-menu");
    var sidebar = document.querySelector(".sidebar");
    var sidenav = document.querySelectorAll(".side-navitem");
    open.addEventListener('click', function () {
        navbar.style.display = "none";
        sidebar.style.display = "block";
    })
    close.addEventListener('click', function () {
        navbar.style.display = "flex";
        sidebar.style.display = "none";
    })
    sidenav.forEach(function (button) {
        button.addEventListener('click', function () {
            navbar.style.display = "flex";
            sidebar.style.display = "none";
        })
    })

})();