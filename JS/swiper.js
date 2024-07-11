// new Swiper (선택자, 옵션)
new Swiper('.promotion .swiper-container', {
    slidesPerView: 1, // 한번에 보여줄 슬라이드 개수
    spaceBetween: 15, // 슬라이드 사이 여백
    centerdSlides: true, // 1번 슬라이드가 가운데 보이기
    centerdslides: {
      
    },
    // autoplay: true, // 자동으로 슬라이드가 1장씩 넘어감
    loop: true,
    pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어 여부
  },
  
});


