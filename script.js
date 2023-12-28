function selectSchema(schema) {
  // Select button and unselect the other button
  document.querySelectorAll('button').forEach(el => el.classList.remove('selected'));
  document.getElementById(schema).classList.add('selected');
  
  // Set schema class  
  document.getElementById('wrapper').className = schema;  
}

document.getElementById('light-theme').addEventListener('click', () => {
  selectSchema('theme-light');
});

document.getElementById('medium-theme').addEventListener('click', (e) => {
  selectSchema('theme-medium');
});

document.getElementById('dark-theme').addEventListener('click', (e) => {
  selectSchema('theme-dark');
});

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

const h2 = document.querySelector('.second_h2')

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }