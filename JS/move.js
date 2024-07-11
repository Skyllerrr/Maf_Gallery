/*



const headerEl = document.querySelector('header')

const headerMenuEls = [...headerEl.querySelectorAll('ul.menu > li')]

const toTopEl = document.querySelector('#to-top');

const CloseEl = document.querySelector('.close-btn')

const nextClick = document.querySelector('.main-banner')



// new Swiper (선택자, 옵션)
new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이 여백
  centerdSlides: true, // 1번 슬라이드가 가운데 보이기
  // autoplay: true, // 자동으로 슬라이드가 1장씩 넘어감
  loop: true,
});


function playScroll() {
  // documentElement is <html>
  document.documentElement.classList.remove('fixed')
}

function stopScroll() {
  document.documentElement.classList.add('fixed')
}


const menuStarterEl = document.querySelector('header .header-hamburger')

/*
const menuStarterEll = document.querySelector('header .header-hamburgerr')
*/



/*



const menuCloseEl = document.querySelector('header .Toggle_Close')

menuCloseEl.addEventListener('click', () => {
  if (headerEl.classList.contains('menuing')) {
    headerEl.classList.remove('menuing')
    stopScroll()
    
  } else {
    headerEl.classList.add('menuing')
    playScroll()
  }
})


menuStarterEl.addEventListener('click', () => {
  if (headerEl.classList.contains('menuing')) {
    headerEl.classList.remove('menuing')
    playScroll()
    
    } else {
      headerEl.classList.add('menuing')
    stopScroll()
  }
})






/*
menuStarterEll.addEventListener('click', () => {
  if (headerEls.classList.contains('menuing')) {
    headerEls.classList.remove('menuing')
    playScroll()
    
  } else {
    headerEls.classList.add('menuing')
    stopScroll()
  }
})
*/

// script.js
/*
document.addEventListener("DOMContentLoaded", () => {
  const translations = {
      one: "전시",
      two: "작가",
      three: "뉴스",
      four: "출처",
      five: "누구",
  };

  const originalText = {
      one: "Exhibitions",
      two: "Artists",
      three: "News",
      four: "Publication",
      five: "About Us",
  };

  const EnglishEl = document.querySelector('.Toggle_EN')
  let isKorean = false;

  EnglishEl.addEventListener("click", () => {
      if (isKorean) {
          // 영어로 변경
          document.getElementById("one").textContent = originalText.heading;
          document.getElementById("two").textContent = originalText.description;
          EnglishEl.textContent = "KR";
          isKorean = false;
      } else {
          // 한글로 변경
          document.getElementById("two").textContent = translations.heading;
          document.getElementById("one").textContent = translations.description;
          EnglishEl.textContent = "EN";
          isKorean = true;
      }
  });
});
*/





/* Exhibition001에서 메인 베너의 이미지나
전시 이름 및 작가의 이름이 나와있는 텍스트를
클릭했을 시, Exhibition002 화면이 보여짐 */

/*



nextClick.addEventListener('click', () => {
  if (nextClick) {
    window.location.href = 'Exhibition_002.html';
  } else {
    console.log('asd')
  }
})




window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 100) {
    
    // 배지 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    
    // 버튼 보이기!
    gsap.to(toTopEl, 0.2, {
      
      x: 0
    });
    
  } else {
    // 배지 보이기
    
    // 버튼 숨기기!
    gsap.to(toTopEl, 0.2, {
      
      x: 100
    });
    
  }
}, 300));


/*
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY < 0) {
    toTopEll.style.display = 'none'
    // 배지 숨기기
    // gsap.to(요소, 지속시간, 옵션);
    
    // 버튼 보이기!
    
  } else {
    // 배지 보이기
    
    // 버튼 숨기기!
    
    
  }
}, 300));
*/


/*
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 700) {
    headerEl.style.display = 'none'
  } else {
    headerEll.style.display = 'inline-block'
  }
}, 300));
*/



/*
toTopEl.addEventListener('click', function () {
  gsap.to(window, 0.3, {
    scrollTo: 0
  });
});
*/



