const toExhibition = document.querySelector('.text-one');
const toWorks = document.querySelector('.text-two');

toExhibition.addEventListener('click', function () {
    gsap.to(window, 0.9, {
        scrollTo: 1300
    });
});

toWorks.addEventListener('click', function () {
    gsap.to(window, 0.9, {
        scrollTo: 2100
    });
});
