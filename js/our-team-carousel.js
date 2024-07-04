const response = await fetch("api/worker.json");
const workers = await response.json();
renderWorkers(workers);

let currentIdx = 0; // Додано для відстеження поточного індексу слайда

function renderWorkers(workers) {
  let workersHtml = "";
  for (const worker of workers) {
    workersHtml += `
      <div class="our-team__list">
        <div class="our-team-carousel__item">
          <img
            src="${worker.image}"
            alt="${worker.description}"
          />
          <div class="carousel-caption">
            <h3 class="carousel-caption-name">${worker.name}</h3>
            <p class="carousel-caption-position">${worker.position}</p>
          </div>
        </div>
      </div>
    `;
  }

  const slideContainer = document.querySelector('.our-team__content-container');
  slideContainer.innerHTML = workersHtml; // Замінено slides на workersHtml
}

function nextSlide() {
  currentIdx = currentIdx + 1 >= workers.length ? 0 : currentIdx + 1; // Використано workers.length замість slides.length
  renderSlide();
}

function prevSlide() {
  currentIdx = currentIdx - 1 < 0 ? workers.length - 1 : currentIdx - 1; // Використано workers.length замість slides.length
  renderSlide();
}

function renderSlide() {
	const slideContainer = document.querySelector('.our-team__content-container');
	slideContainer.innerHTML = ''; // Очищення контейнера перед відображенням нового слайда
  
	// Render the current slide
	slideContainer.innerHTML += `
	  <div class="our-team__list">
		<div class="our-team-carousel__item">
		  <img
			src="${workers[currentIdx].image}"
			alt="${workers[currentIdx].description}"
		  />
		  <div class="carousel-caption">
			<h3 class="carousel-caption-name">${workers[currentIdx].name}</h3>
			<p class="carousel-caption-position">${workers[currentIdx].position}</p>
		  </div>
		</div>
	  </div>
	`;
  
	if (window.matchMedia('(min-width:768px)').matches) {
	  const secondSlideIdx = currentIdx + 1 >= workers.length ? 0 : currentIdx + 1;
	  slideContainer.innerHTML += `
		<div class="our-team__list">
		  <div class="our-team-carousel__item">
			<img
			  src="${workers[secondSlideIdx].image}"
			  alt="${workers[secondSlideIdx].description}"
			/>
			<div class="carousel-caption">
			  <h3 class="carousel-caption-name">${workers[secondSlideIdx].name}</h3>
			  <p class="carousel-caption-position">${workers[secondSlideIdx].position}</p>
			</div>
		  </div>
		</div>
	  `;
  
	  if (window.matchMedia('(min-width:980px)').matches) {
		const thirdSlideIdx = secondSlideIdx + 1 >= workers.length ? 0 : secondSlideIdx + 1;
		slideContainer.innerHTML += `
		  <div class="our-team__list">
			<div class="our-team-carousel__item">
			  <img
				src="${workers[thirdSlideIdx].image}"
				alt="${workers[thirdSlideIdx].description}"
			  />
			  <div class="carousel-caption">
				<h3 class="carousel-caption-name">${workers[thirdSlideIdx].name}</h3>
				<p class="carousel-caption-position">${workers[thirdSlideIdx].position}</p>
			  </div>
			</div>
		  </div>
		`;
	  }
	}
  }
  
renderSlide();

const btnNext = document.querySelector('.our-team__btn-next');
btnNext.addEventListener('click', nextSlide);

const btnPrev = document.querySelector('.our-team__btn-prev');
btnPrev.addEventListener('click', prevSlide);

window.addEventListener('resize', renderSlide);