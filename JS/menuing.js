const headerEl = document.querySelector('header')

const headerMenuEls = [...headerEl.querySelectorAll('ul.menu > li')]


const menuStarterEl = document.querySelector('header .header-hamburger')

/*
const menuStarterEll = document.querySelector('header .header-hamburgerr')
*/



const menuCloseEl = document.querySelector('header .Toggle_Close')

function playScroll() {
    // documentElement is <html>
    document.documentElement.classList.remove('fixed')
  }
  
  function stopScroll() {
    document.documentElement.classList.add('fixed')
  }


menuCloseEl.addEventListener('click', () => {
  if (headerEl.classList.contains('menuing')) {
    headerEl.classList.remove('menuing')
    playScroll()
    
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