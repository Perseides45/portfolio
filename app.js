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