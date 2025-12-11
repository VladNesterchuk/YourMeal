// Open & Close Hot Dog Chilli
{
    const productDetailButtonHDChilli = document.getElementById('HDChilli');
    const modalHDChilli = document.getElementById('HDChilliModal');
    const modalCloseButtonHDChilli = document.getElementById('ModalCloseHDChilli');
    
    productDetailButtonHDChilli.addEventListener('click', function() {
        modalHDChilli.classList.add('modal_open');
    });
    
    modalCloseButtonHDChilli.addEventListener('click', function() {
        modalHDChilli.classList.remove('modal_open');
    });
    }
    
// Open & Close Hot Dog Bacon
{
    const productDetailButtonHDBacon = document.getElementById('HDBacon');
    const modalHDBacon = document.getElementById('HDBaconModal');
    const modalCloseButtonHDBacon = document.getElementById('ModalCloseHDBacon');
    
    productDetailButtonHDBacon.addEventListener('click', function() {
        modalHDBacon.classList.add('modal_open');
    });
    
    modalCloseButtonHDBacon.addEventListener('click', function() {
        modalHDBacon.classList.remove('modal_open');
    });
    }