function crearcorazon(){
    const corazon = document.createElement("div");
    corazon.classList.add("corazon");

    corazon.innerHTML="❤️"

    corazon.style.left = Math.random() * 100 + "vw";

    corazon.style.animationDuration = (Math.random() * 3 + 2) + "s";

    document.body.appendChild(corazon);

    setTimeout(() => {
            corazon.remove();
        }, 5000);
       
}
  setInterval(crearcorazon,300);

 const images= [
     "images/images1.jpg",
     "images/images2.jpg",
     "images/images3.jpg",
     "images/images4.jpg",
     "images/images5.jpeg",


];

function crearFoto(){

    const  foto = document.createElement("img");

    // Elegir foto aleatoria
    const fotoRandom = images[Math.floor(Math.random() * images.length)];

    foto.src = fotoRandom;

    foto.classList.add("foto");

    foto.style.left = Math.random() * 100 + "vw";

    foto.style.animationDuration = (Math.random() * 3 + 3) + "s";

    document.body.appendChild(foto);

    setTimeout(() => {
        foto.remove();
    }, 6000);
}

setInterval(crearFoto, 800);