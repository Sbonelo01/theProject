'use strict';

// the corousel code
var slideIndex = 1;
showSlides(slideIndex);

// the controls for next and previous
let plusSlides = (n) => {
	showSlides(slideIndex += n)
} 

// the controls for the thumbnails
let currentSlide = (n) => {
	showSlides(slideIndex = n)
}

const showSlides = (n) => {
	var i;
	var slides = document.getElementsByClassName('slides')
	var dots = document.getElementsByClassName('demo')
	if(n > slides.length){
		slideIndex = 1
	}
	if(n < 1){
		slideIndex = slides.length
	}
	for(i = 0; i < slides.length; i++){
		slides[i].style.display = 'none';
	}
	for(i = 0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace(' active', '')
	}

	slides[slideIndex-1].style.display = 'block';
	dots[slideIndex-1].className += ' active';
}