const track = document.querySelector('.carousel_track')
const slides = Array.from(track.children)
const nextButton = document.querySelector('.carousel_button--right');
const prevButton = document.querySelector('.carousel_button--left');
const dotsNav = document.querySelector('.carousel_nav')
const dots = Array.from(dotsNav.children)


const slideWidth = slides[0].getBoundingClientRect().width;
//console.log(slideWidth)

// arrange the slides next to one another 
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);


const moveToSlide = (track, currentSlide, targetSlide) =>
{
    track.style.transform = "translateX(-" + targetSlide.style.left + "";
    currentSlide.classList.remove("current--slide");
    targetSlide.classList.add("current--slide");
}


const updateDots = (currentDot, targetDot) =>
{
    currentDot.classList.remove("current--slide");
    targetDot.classList.add("current--slide")
}

const transition = (nextSlide) =>
{
    const static_noise = document.querySelector(".static_over");
    nextSlide.classList.add("is-hidden");
    static_noise.classList.remove("is-hidden");
    setTimeout(fff = () => {
        static_noise.classList.add("is-hidden");
        nextSlide.classList.remove("is-hidden");
    }, 600);
}

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) =>
{

    if (targetIndex === 0)
    {
        prevButton.classList.add("is-hidden");
        nextButton.classList.remove('is-hidden');
    }  
    else if (targetIndex === slides.length -1 )
    {
        prevButton.classList.remove("is-hidden");
        nextButton.classList.add('is-hidden');
    }
    else
    {
        prevButton.classList.remove("is-hidden");
        nextButton.classList.remove("is-hidden");
    }


}





// when I click left move slide to the left
prevButton.addEventListener("click", e => 
{
    const currentSlide = track.querySelector(".current--slide");
    const prevSlide =  currentSlide.previousElementSibling;
    const currentDot= dotsNav.querySelector(".current--slide");
    const prevDot = currentDot.previousElementSibling;
    const prevIndex =slides.findIndex(slide => slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);

    transition(prevSlide);
})

// when I click right move slide to the right
nextButton.addEventListener("click", e => 
{
    const currentSlide = track.querySelector(".current--slide");
    const nextSlide =  currentSlide.nextElementSibling;
    const currentDot= dotsNav.querySelector(".current--slide");
    const nextDot = currentDot.nextElementSibling;
    const nextIndex =slides.findIndex(slide => slide === nextSlide);


    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);

    hideShowArrows (slides, prevButton, nextButton, nextIndex);

    transition(nextSlide);
})


// when I click nav indicator move to that side

dotsNav.addEventListener("click", e =>
{
    // what indicator was clicked on?
    const targetDot = e.target.closest("button");

    
    if (!targetDot) return;

    const currentSlide = track.querySelector(".current--slide");
    const currentDot = dotsNav.querySelector(".current--slide");
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);

    hideShowArrows (slides, prevButton, nextButton, targetIndex);

    transition(targetSlide);

})

timer_slide = () => {
     
    const currentSlide = track.querySelector(".current--slide");
    const currentDot= dotsNav.querySelector(".current--slide");
    const currentIndex =slides.findIndex(slide => slide === currentSlide);
    
    
    


    if (currentIndex < slides.length-1)
    {
        
         nextSlide =  currentSlide.nextElementSibling;
         nextDot = currentDot.nextElementSibling;
        

        console.log("avanti");
    }else
    {
         nextSlide =  slides[0];
         nextDot = dots[0];
        console.log("ritorna");

    }

    const nextIndex =slides.findIndex(slide => slide === nextSlide);


    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideShowArrows (slides, prevButton, nextButton, nextIndex);
    
    
    transition(nextSlide);


  };


timer_static = () =>
  {
    const static_noise = document.querySelector(".static_over");
    
    setTimeout(timer_slide, 30);
  }

setInterval(timer_slide, 3000);


