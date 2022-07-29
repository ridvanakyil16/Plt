var cizgi = document.querySelector(".cizgi")
let width = 0;
let int = setInterval(Cizgi, 0.1)
console.log("mehaba")

function Cizgi() {
    width = width + 2
    if (width > 300) {
        clearInterval(int)
    }
    cizgi.style.maxWidth = `${width}px`
}



var buttons = document.querySelectorAll(".btn")

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains("active")) {
            btn.classList.remove("active");
        } else {
            removeActiveClasses();
            btn.classList.add("active");
        }
    })
});



function removeActiveClasses() {
    buttons.forEach(btn => {
        btn.classList.remove("active");
    })
}

$(document).ready(function() {
    $("*").click(function(event) {
        if (!$(event.target).is(".my-accordion *")) {
            buttons.forEach(btn => {
                btn.classList.remove("active");
            })
        }
    });
});