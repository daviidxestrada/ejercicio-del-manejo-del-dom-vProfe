const fotoBanner=document.querySelector("#fotoBanner")
const galeria =document.querySelector("#galeria")


const arrayBanners= [
    {
        src: "assets/header/hero-01.jpg",
        alt: "Foto 1"
    },
    {
        src: "assets/header/hero-02.jpg",
        alt: "Foto 2"
    },
    {
        src: "assets/header/hero-03.jpg",
        alt: "Foto 3"
    },
    {
        src: "assets/header/hero-04.jpg",
        alt: "Foto 4"
    },
    {
        src: "assets/header/hero-05.png",
        alt: "Foto 5"
    },
    {
        src: "assets/header/hero-06.jpg",
        alt: "Foto 6"
    },
]


const arrayFotos =[

{
    src:"assets/gallery/gal-01.jpg",
    alt:"Foto de galeria 1",
    pie_de_foto:"este es el pie de foto foto de galeria 1"
},
{
    src:"assets/gallery/gal-02.JPG",
    alt:"Foto de galeria 2",
    pie_de_foto:"este es el pie de foto foto de galeria 2"
},
{
    src:"assets/gallery/gal-03.jpg",
    alt:"Foto de galeria 3",
    pie_de_foto:"este es el pie de foto foto de galeria 3"
},
{
    src:"assets/gallery/gal-04.jpg",
    alt:"Foto de galeria 4",
    pie_de_foto:"este es el pie de foto foto de galeria 4"
},



]
const pintarGaleria = ()=>{
     arrayFotos.forEach((item)=>{
        const cajaImagen=document.createElement("figure")
        cajaImagen.classList.add("card")
        const imagen = document.createElement("img")
        imagen.src=item.src
        imagen.alt=item.alt
        const pie = document.createElement ("figcaption")
        pie.textContent=item.pie_de_foto
        

      cajaImagen.append(imagen, pie)
      galeria.append(cajaImagen)


     })
}

const pintarBanner =  ()=>{
    const index = Math.floor(Math.random()*arrayBanners.length);
   fotoBanner.src = arrayBanners[index].src
   fotoBanner.alt = arrayBanners[index].alt
}

pintarBanner()
pintarGaleria()