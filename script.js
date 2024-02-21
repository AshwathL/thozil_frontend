var images = document.querySelectorAll('.slider img');
var currentIndex = 0;
var nextBtn = document.getElementById('nextBtn');

function showImage(index) {
  images.forEach(function(img, i) {
    if (i === index) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });
}

function nextImage() {
  currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
  showImage(currentIndex);
}

// Show the first image initially
showImage(currentIndex);

// Add event listener to the next button
nextBtn.addEventListener('click', nextImage);


