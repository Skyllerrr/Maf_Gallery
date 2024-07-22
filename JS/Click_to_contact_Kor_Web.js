document.addEventListener('DOMContentLoaded', () => {
  const scrollIcon = document.querySelector('.to-contact-Kor');

  scrollIcon.addEventListener('click', () => {
      window.location.href = '../AboutUs-Web/AboutUs_Web_Kor.html#bottom'; // 다른 페이지로 이동하면서 해시 값 추가
  });

  // URL의 해시 값을 확인하여 맨 하단으로 스크롤
  if (window.location.hash === '#bottom') {
      window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth' // 부드럽게 스크롤
      });
  }
});
