const inicio = document.getElementById("inicio");
const carta = document.getElementById("carta");
const mensajeFinal = document.getElementById("mensajeFinal");

const textoCarta = `
Hoy quiero desearte un cumpleaños lleno de alegría,
paz y muchas bendiciones.

Quiero que recuerdes siempre lo especial
que eres y el valor tan grande que tienes.

Que Dios guíe cada paso de tu vida, que tus sueños
se cumplan y que nunca pierdas esa sonrisa que
hace especial a las personas que te rodean.

Gracias por ser una persona increíble.
`;

const texto = document.getElementById("texto");


// Abrir regalo

document.getElementById("abrir").addEventListener("click",()=>{

    inicio.classList.add("oculto");
    carta.classList.remove("oculto");

    escribirTexto();
    crearPetalos();

});


// Escritura automática

function escribirTexto(){

    let i=0;

    texto.innerHTML="";

    let intervalo=setInterval(()=>{

        texto.innerHTML += textoCarta[i];

        i++;

        if(i>=textoCarta.length){
            clearInterval(intervalo);
        }

    },40);

}


// Botón final

document.getElementById("final").addEventListener("click",()=>{

    carta.classList.add("oculto");
    mensajeFinal.classList.remove("oculto");

    crearPetalos();

});


// Crear pétalos

function crearPetalos(){

    setInterval(()=>{

        let petalo=document.createElement("div");

        petalo.className="petalo";

        petalo.innerHTML="🌸";

        petalo.style.left=Math.random()*100+"vw";

        petalo.style.animationDuration=
        (5+Math.random()*5)+"s";

        document.body.appendChild(petalo);


        setTimeout(()=>{

            petalo.remove();

        },10000);


    },400);

}