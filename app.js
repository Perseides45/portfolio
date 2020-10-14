let count = 10;
let counter = setInterval(timer, 1000);

function timer() {
    count = count - 1;
    if (count <= 0) {
        clearInterval(counter);
        return;
    }
    document.getElementById("timer").textContent = " " + count + "s ";
}

$("#navigation-advice").modal("show").on("shown.bs.modal", () => {
    setTimeout(() => {
        $("#navigation-advice").modal("hide");
    }, 10000);
});



let darkModeButton = document.getElementById("dark-mode-button");

let navbarContainer = document.getElementById("navbar-container");
let navbar = document.getElementById("navbar");

let navLink = document.getElementsByClassName("nav-link");

darkModeButton.addEventListener("click", function () {
    if (navbarContainer.classList.contains("bg-dark")) {
        setToLightMode();

    } else {
        setToDarkMode();
    }
});

function setToLightMode() {
    navbarContainer.classList.add("bg-light")
    navbarContainer.classList.remove("bg-dark")
    navbar.classList.add("navbar-light")
    navbar.classList.remove("navbar-dark")
    $('.nav-link').addClass('text-dark')
    $('.nav-link').removeClass('text-light')

}

function setToDarkMode() {
    navbarContainer.classList.add("bg-dark")
    navbarContainer.classList.remove("bg-light")
    navbar.classList.add("navbar-dark")
    navbar.classList.remove("navbar-light")
    $('.nav-link').addClass('text-light')
    $('.nav-link').removeClass('text-dark')
}   