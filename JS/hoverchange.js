/* Artist001 섹션에서 Artist name을 마우스로 hover했을 시,
이미지 변화 (애니메이션 X) */

document.addEventListener('DOMContentLoaded', () => {
    const hoverText = document.querySelector('.hover-text-test');
    const image = document.querySelector('.gizone');
    const originalSrc = image.src;
    const hoverSrc = '../img/Artist-Exhibition-img.png'; // 변경할 이미지 URL

    hoverText.addEventListener('mouseover', () => {
        image.src = hoverSrc;
    });

    hoverText.addEventListener('mouseout', () => {
        image.src = originalSrc;
    });
});




/* Artist001 섹션에서 Artist name을 마우스로 hover했을 시,
이미지 변화 (애니메이션 O) */

document.addEventListener('DOMContentLoaded', () => {
    const hoverText = document.querySelector('.test');
    const image1 = document.querySelector('.gizone');
    const image2 = document.querySelector('.change');

    

    hoverText.addEventListener('mouseover', () => {
        image1.classList.add('hidden');
        image2.classList.remove('hidden');
        image2.classList.add('visible');
    });

    hoverText.addEventListener('mouseout', () => {
        image2.classList.remove('visible');
        image2.classList.add('hidden');
        image1.classList.remove('hidden');
    });
});

