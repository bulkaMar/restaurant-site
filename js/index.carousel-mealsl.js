const slides = [
	`<div>
	  <img src="img/carousel-meals/carousel-cooking.jpeg" alt="Chef preparing dishes in a professional kitchen">
	</div>`,
	`<div>
	  <img src="img/carousel-meals/carousel-meat.jpeg" alt="Sliced steak with vegetables and sauce">
	</div>`,
	`<div>
	  <img src="img/carousel-meals/carousel-soup.jpeg" alt="Bowl of soup with seafood and herbs">
	</div>`,
	`<div>
	  <img src="img/carousel-meals/carousel-cheers.jpeg" alt="People toasting with drinks at a dinner table">
	</div>`,
	`<div>
	  <img src="img/carousel-meals/carousel-buns.jpeg" alt="Close-up of freshly baked buns with topping">
	</div>`,
	`<div>
	  <img src="img/carousel-meals/carousel-decorate-meal.jpeg" alt="Chef decorating a gourmet meal on a wooden board">
	</div>`,
	`<div>
	  <img src="img/carousel-meals/carousel-glasses.jpeg" alt="Table set with wine glasses and elegant dishes">
	</div>`,
  ];
  
  let currentIdx = 0;
  function renderSlide() {
	const slideContainer = document.querySelector(".carousel-meals__slides");
	slideContainer.innerHTML = slides[currentIdx];
	if (window.matchMedia("(min-width:436px)").matches) {
	  const secondSlideIdx = currentIdx + 1 >= slides.length ? 0 : currentIdx + 1;
	  slideContainer.innerHTML += slides[secondSlideIdx];
	}
	if (window.matchMedia("(min-width:631px)").matches) {
	  const secondSlideIdx = currentIdx + 1 >= slides.length ? 0 : currentIdx + 1;
	  const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
	  slideContainer.innerHTML += slides[thirdSlideIdx];
	}
	if (window.matchMedia("(min-width:768px)").matches) {
	  const secondSlideIdx = currentIdx + 1 >= slides.length ? 0 : currentIdx + 1;
	  const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
	  const fourthSlideIdx = thirdSlideIdx + 1 >= slides.length ? 0 : thirdSlideIdx + 1;
	  slideContainer.innerHTML += slides[fourthSlideIdx];
	}
	if (window.matchMedia("(min-width:980px)").matches) {
	  const secondSlideIdx = currentIdx + 1 >= slides.length ? 0 : currentIdx + 1;
	  const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
	  const fourthSlideIdx = thirdSlideIdx + 1 >= slides.length ? 0 : thirdSlideIdx + 1;
	  const fifthSlideIdx = fourthSlideIdx + 1 >= slides.length ? 0 : fourthSlideIdx + 1;
	  slideContainer.innerHTML += slides[fifthSlideIdx];
	}
	if (window.matchMedia("(min-width:1100px)").matches) {
	  const secondSlideIdx = currentIdx + 1 >= slides.length ? 0 : currentIdx + 1;
	  const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
	  const fourthSlideIdx = thirdSlideIdx + 1 >= slides.length ? 0 : thirdSlideIdx + 1;
	  const fifthSlideIdx = fourthSlideIdx + 1 >= slides.length ? 0 : fourthSlideIdx + 1;
	  const sixthSlideIdx = fifthSlideIdx + 1 >= slides.length ? 0 : fifthSlideIdx + 1;
	  slideContainer.innerHTML += slides[sixthSlideIdx];
	}
  }
  function nextSlide() {
	currentIdx = currentIdx + 1 >= slides.length ? 0 : currentIdx + 1;
	renderSlide();
  }
  function prevSlide() {
	currentIdx = currentIdx - 1 < 0 ? slides.length - 1 : currentIdx - 1;
	renderSlide();
  }
  renderSlide();
  const btnNext = document.querySelector(".carousel-meals__btn-next");
  btnNext.addEventListener("click", nextSlide);
  const btnPrev = document.querySelector(".carousel-meals__btn-prev");
  btnPrev.addEventListener("click", prevSlide);
  window.addEventListener("resize", renderSlide);
  