
const imgpath = "./assets/images/slideshow/" 

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	},
	
];

let arrow_left = document.getElementById('arrow_left');
arrow_left.addEventListener("click", () => {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
    showSlide(currentSlide);
});

let arrow_right = document.getElementById('arrow_right');
arrow_right.addEventListener("click", () => {
    currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
    showSlide(currentSlide);
});

let currentSlide = 0;


function showSlide(index) {
    let img = document.querySelector('.banner-img');
    let tagLine = document.querySelector('#banner p');
    img.src = imgpath + slides[index].image;
    tagLine.innerHTML = slides[index].tagLine;

    let dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.remove('dot_selected');
        if (i === index) {
            dot.classList.add('dot_selected');
        }
    });
}

let dots = document.querySelectorAll('.dot');
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentSlide = i;
        showSlide(currentSlide);
    });
});


showSlide(currentSlide);



