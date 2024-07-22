document.addEventListener('DOMContentLoaded', () => {

    const modal = document.getElementById('Part-modal');
    const img = document.querySelector('.artist-name')
    const closeBtn = document.querySelector('.modal-closen');
    
     // 이미지 클릭 시 모달 열기
    img.addEventListener('click', () => {
      modal.style.display = 'block';

      setTimeout(() => {
        modal.classList.add('show');
    }, 10);

    });

    // 닫기 버튼 클릭 시 모달 닫기
    closeBtn.addEventListener('click', () => {

       modal.classList.remove('show');
       setTimeout(() => {
        modal.style.display = 'none';
    }, 300);

    });

    /*
    // 모달 외부 클릭 시 모달 닫기
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    */
});