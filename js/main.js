var productSwiper = new Swiper('.swiper', {
  // Optional parameters
  slideActiveClass: true,
  loop: true,
  speed: 700,
  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
    
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  
});

var reviewsSwiper = new Swiper('.reviews-slider', {
  
  loop: true,
  loopedSlides: 2,
  effect: "coverflow",  
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      speed: 600,
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 0,
        slideShadows: true,

  },
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  
});



function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
  observer.observe(elm);
};

var playButton = document.querySelector(".lessons-video__button");
// Event listener for the play/pause button
playButton.addEventListener("click", function() {
  if (video.paused == true) {
    // Play the video
    video.play();

    // Update the button text to 'Pause'
    playButton.innerHTML = "Pause";
  } else {
    // Pause the video
    video.pause();

    // Update the button text to 'Play'
    playButton.innerHTML = "Play";
  }
});

$('.js-tab-trigger').click(function() {
  // клик! 
})

$('.js-tab-trigger').click(function() {
  var id = $(this).attr('data-tab'), // 1
      content = $('.js-tab-content[data-tab="'+ id +'"]'); // 2
});


$('.js-tab-trigger').click(function() {
  var id = $(this).attr('data-tab'),
      content = $('.js-tab-content[data-tab="'+ id +'"]');
  
  $('.js-tab-trigger.active').removeClass('active'); // 1
  $(this).addClass('active'); // 2
  
  $('.js-tab-content.active').removeClass('active'); // 3
  content.addClass('active'); // 4
});


var tabSwiper = new Swiper('.tab-slider', {
  // Optional parameters
  slideActiveClass: true,
  cssMode: true,
  // Navigation arrows
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  navigation: {
    nextEl: '.tab-slider__button--next',
    prevEl: '.tab-slider__button--prev',  
  },
  keyboard: true,
 
});

