// new Swiper (선택자, 옵션)
new Swiper('.promotion .swiper-container', {
    slidesPerView: 1.7, // 한번에 보여줄 슬라이드 개수
    spaceBetween: 1, // 슬라이드 사이 여백
    centerdSlides: true, // 1번 슬라이드가 가운데 보이기
    // autoplay: true, // 자동으로 슬라이드가 1장씩 넘어감
    loop: true,
    
    pagination: {
      el: '.promotion .swiper-pagination',
      clickable: true // 페이지 번호 요소 선택자
     // 사용자의 페이지 번호 요소 제어 여부
  },
});




