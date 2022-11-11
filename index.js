let btnSi= document.getElementById("btn-si");
let btnNo=document.getElementById("btn-no");
let divModoSexo= document.getElementsByClassName("modo-sexo")[0];
let seccionPrincipal = document.querySelector(".container");
let video = document.getElementById("video-perrito");

function moverPosicionRandom(element){
    element.style.position = "absolute";
    element.style.top = Math.random()*(window.innerHeight-element.offsetHeight)+'px';
    element.style.left = Math.random()*(window.innerWidth-element.offsetWidth)+'px';
}

btnNo.addEventListener("mouseenter", function(e){
    moverPosicionRandom(e.target)
});

btnSi.addEventListener("click", function(e){
    alert("Sabía que dirias que sí. Casemonos ya y adoptemos perritos! 💓")
    divModoSexo.style.display="flex";
    seccionPrincipal.style.display="none";
    video.pause();
    const cancion = new Audio('./Assets/img_modo_hot.mp3')
    cancion.play()
});