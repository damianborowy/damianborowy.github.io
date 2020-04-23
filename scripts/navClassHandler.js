var nav = document.getElementById("nav");

const handler = () => {
    if (document.documentElement.scrollTop >= 200) {
        nav.classList.remove("nav-transparent");
    } else {
        nav.classList.add("nav-transparent");
    }
};


window.onscroll = handler;
window.onload = handler;