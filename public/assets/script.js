const carousel = document.querySelector('.carousel_icons')
const prevButton = document.getElementById('prevButton')
const nextButton = document.getElementById('nextButton')

let position = 0;
const imgWidth = 100;
const logoCount = carousel.children.length;

prevButton.addEventListener('click', () => {
    position += imgWidth;
    if(position < 0){
        position = -imgWidth * (logoCount - 1);
    }
    updateCarousel();
})

nextButton.addEventListener('click', () => {
    position -= imgWidth;
    if(position < -imgWidth * (logoCount - 1)){
        position = 0
    }
    updateCarousel();
})

function updateCarousel() { 
    const offset = -position * 220;
    carousel.style.transform = `translateX(${offset}px)`;
 }

 console.log('hola')
 updateCarousel()