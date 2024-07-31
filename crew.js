document.addEventListener("DOMContentLoaded", () => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        const crewContent = document.getElementById('crew-content');
        const slides = data.crew.map((member, index) => `
          <div class="mySlides fade">
            <div class="slide-flex">
              <div class="slidetext">
                <h4>${member.role}</h4>
                <h3>${member.name}</h3>
                <p>${member.bio}</p>
              </div>
              <img src="${member.image}" alt="${member.role} Image" class="width-img ${member.role.toLowerCase().split(' ').join('-')}-bottom">
            </div>
          </div>
        `).join('');
        const dots = data.crew.map((_, index) => `
          <span class="dot ${index === 0 ? 'active1' : ''}" onclick="currentSlide(${index + 1})"></span>
        `).join('');
        crewContent.innerHTML = `
          <div class="slideshow-container">${slides}</div>
          <div class="dot-slide">${dots}</div>
        `;
        showSlides();
      })
      .catch(error => console.error('Error fetching crew data:', error));
  });
  
  let slideIndex = 0;
  function showSlides() {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active1", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active1";
    setTimeout(showSlides, 6000); // Change image every 6 seconds
  }
  
  function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
  }
  
  function myFirstfunction() {
    document.getElementById("h-menu").classList.toggle("show");
    document.getElementById("close-img").classList.toggle("z-index");
    document.getElementById("ham-img").classList.toggle("hidden");
  }
  
  function mysecondfunction() {
    document.getElementById("ham-img").classList.remove("hidden");
    document.getElementById("h-menu").classList.remove("show");
    document.getElementById("close-img").classList.remove("z-index");
  }