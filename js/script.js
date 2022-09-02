let nav = document.getElementsByTagName('nav')[0];
let toggle = document.getElementById('toggle');
let ul = document.getElementById('nav-ul');
let arrow = document.getElementsByClassName('up-arrow')[0];
let toggler = document.getElementsByClassName('navbar-toggler')[0];
let collapse = document.getElementsByClassName('collapse')[0];



collapse
window.onscroll = function () {
    if(scrollY > 0){
        nav.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
        nav.style.padding = "8px 0";
    }else{
        nav.style.backgroundColor = "transparent";
        nav.style.padding = "18px 0";
    }

    if(scrollY > 50){
        arrow.style.visibility = "visible";
        arrow.style.opacity = "1";
    }else{
        arrow.style.visibility = "hidden";
        arrow.style.opacity = "0";
    }
};

toggler.onclick = function (){
    collapse.classList.toggle("bg-light");
}