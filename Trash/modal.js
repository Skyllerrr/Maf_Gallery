/* Ex002 - Installation View의 모달 */


function productDetailModal({
    imgSrc}){
    const productDetailModalRoot = document.createElement('div');

    productDetailModalRoot.id = 'productDetailModalRoot';
    productDetailModalRoot.classList.add('product-detail-modal-root');

    let elementStr = '';
    
    

    let html = `
        <div class="modal-body">
            <div class="img-container">
                <img src="${imgSrc ? imgSrc : ''}" >
            </div>
        </div>
    `;

    
    productDetailModalRoot.insertAdjacentHTML('beforeend', html);



    
}   