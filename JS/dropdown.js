// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const dropdownButton = document.querySelector('.dropdown-button');
    const dropdownButtons = document.querySelector('.dropdown-img');

    const dropdownContent = document.querySelector('.dropdown-content');
    const dropdownItems = document.querySelectorAll('.dropdown-content a');

  dropdownButton.addEventListener('click', () => {
      dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
  });
    
 

  dropdownItems.forEach(item => {
      item.addEventListener('click', (event) => {
          event.preventDefault();
          dropdownButton.textContent = item.textContent;
          dropdownContent.style.display = 'none';
      });
  });
    

  window.addEventListener('click', (event) => {
      if (!event.target.matches('.dropdown-button')) {
          if (dropdownContent.style.display === 'block') {
              dropdownContent.style.display = 'none';
          }
      }
  });
});
