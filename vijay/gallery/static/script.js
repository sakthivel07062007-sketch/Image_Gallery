const gallery = [

    {
        image:"pic1.jpeg",
        text:"IRONMAN"
    },

    {
        image:"pic2.jpeg",
        text:"CAPTAIN AMERICA"
    },

    {
        image:"img3.webp",
        text:"THOR"
    },

    {
        image:"img4.jpeg",
        text:"SPIDERMAN"
    },

    {
        image:"img5.jpeg",
        text:"DEADPOOL"
    }

];

let currentIndex = 0;

const image = document.getElementById("galleryImage");
const caption = document.getElementById("caption");

function showImage(index){

    image.style.opacity = 0;

    setTimeout(() => {

        image.src = gallery[index].image;
        caption.innerText = gallery[index].text;

        image.style.opacity = 1;

    }, 200);
}

function nextImage(){

    currentIndex++;

    if(currentIndex >= gallery.length){
        currentIndex = 0;
    }

    showImage(currentIndex);
}

function previousImage(){

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = gallery.length - 1;
    }

    showImage(currentIndex);
}