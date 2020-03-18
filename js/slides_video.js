var si = 1;
slideshow(si);

// Next/previous controls
function slidesloc(n) {
  slideshow(si += n);
}

// Thumbnail image controls
function currentslide(n) {
  slideshow(si = n);
}

function slideshow(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {si = 1}
  if (n < 1) {si = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[si-1].style.display = "block";
  dots[si-1].className += " active";
}

