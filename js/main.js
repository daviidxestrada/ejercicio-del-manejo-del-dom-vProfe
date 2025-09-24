const headerImages = [
    "img/header/hero-01.jpg",
    "img/header/hero-02.jpg",
    "img/header/hero-03.jpg",
    "img/header/hero-04.jpg",
    "img/header/hero-05.png",
    "img/header/hero-06.jpg"
];

function randomFrom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

document.addEventListener("DOMContentLoaded",() => {
     const img = document.getElementById("header-img");
     const chosen = randomFrom(headerImages);
     img.src = chosen;
     img.alt = "Imagen de cabecera: " + chosen.split("/").pop();

     // Generar la galeria dinámicamente
     const galeria = document.getElementById("galeria")

     galleryItems.forEach(item => {
        // Crear elementos
        const card = document.createElement("article") //LA W3C recomienda que siempre que una imagen tenga un texto visible usar un <figure> (yo usé article en la)
        card.classList.add("card")

        const img=document.createElement("img");
        img.src = item.url;
        img.alt = item. descripcion;

        const p = document.createElement("p")
        p.textContent = item.descripcion

        //Armar la tarjeta
        card.appendChild(img)
        card.appendChild(p)

        // Insertar en la galería
        galeria.appendChild(card)

     })
});

const galleryItems = [
    {url: "img/gallery/gal-01.jpg", descripcion: "Descripción 1"},
    {url: "img/gallery/gal-02.JPG", descripcion: "Descripción 2"},
    {url: "img/gallery/gal-03.jpg", descripcion: "Descripción 3"},
    {url: "img/gallery/gal-04.jpg", descripcion: "Descripción 4"},
    {url: "img/gallery/gal-05.jpg", descripcion: "Descripción 5"},
    {url: "img/gallery/gal-06.jpg", descripcion: "Descripción 6"},
    {url: "img/gallery/gal-07.jpg", descripcion: "Descripción 7"},
    {url: "img/gallery/gal-08.png", descripcion: "Descripción 8"},
    {url: "img/gallery/gal-09.jpg", descripcion: "Descripción 9"},
    {url: "img/gallery/gal-10.JPG", descripcion: "Descripción 10"},
    {url: "img/gallery/gal-11.jpeg", descripcion: "Descripción 11"},
    {url: "img/gallery/gal-12.png", descripcion: "Descripción 12"}
]