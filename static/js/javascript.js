/* CURSOR ANIMATION */

const body = document.querySelector("body");
const cursor = document.getElementById("cursor");
const links = document.querySelectorAll(".anim-link");

document.addEventListener('mousemove', e => {
    // cursor animation
    cursor.setAttribute("style", "top: " + (e.pageY) + "px; left: " + (e.pageX) + "px;")

    // gradient background
    let mouseXpercentage = Math.round(e.pageX / document.documentElement.scrollWidth * 100);
    let mouseYpercentage = Math.round(e.pageY / document.documentElement.scrollHeight * 100);
    body.setAttribute("style", "background: radial-gradient(at " + mouseXpercentage + '% ' + mouseYpercentage + '%, rgba(18, 49, 45, 0.3) 0%, rgba(10, 13, 28, 0.8) 100%');
})

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        cursor.classList.add("hover");
    })
    link.addEventListener('mouseout', () => {
        cursor.classList.remove("hover");
    })
})

/*----------------------------------------------------------------*/
/*----------------------------------------------------------------*/