// SLOW FADE IN ANIMATION

const slowFadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slow-fade-show');
        }
        // else {
        //     entry.target.classList.remove('slow-fade-show');
        // }
    })
});

const hiddenElementsSlow = document.querySelectorAll('.hidden-slow');
hiddenElementsSlow.forEach((el) => slowFadeObserver.observe(el));

// FAST FADE IN ANIMATION

const fastFadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fast-fade-show');
        }
        // else {
        //     entry.target.classList.remove('fast-fade-show');
        // }
    })
});

const hiddenElementsFast = document.querySelectorAll('.hidden-fast');
hiddenElementsFast.forEach((el) => fastFadeObserver.observe(el));

// SLIDE IN ANIMATION FAST

const fastSlideObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fast-slide-show');
        }
        // else {
        //     entry.target.classList.remove('fast-slide-show');
        // }
    })
});

const fastSlideElements = document.querySelectorAll('.slide-fast');
fastSlideElements.forEach((el) => fastSlideObserver.observe(el));

// SLIDE IN ANIMATION SLOW

const slowSlideObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('slow-slide-show');
        }
        // else {
        //     entry.target.classList.remove('slow-slide-show');
        // }
    })
});

const slowSlideElements = document.querySelectorAll('.slide-slow');
slowSlideElements.forEach((el) => slowSlideObserver.observe(el));
