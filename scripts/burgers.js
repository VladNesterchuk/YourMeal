// Burgers
{
    // Open & Close MeatBomb
    {
    const productDetailButtonMeatBomb = document.getElementById('MeatBomb');
    const modalMeatBomb = document.getElementById('MeatBombModal');
    const modalCloseButtonMeatBomb = document.getElementById('ModalCloseMeatBomb');
    
    productDetailButtonMeatBomb.addEventListener('click', function() {
        modalMeatBomb.classList.add('modal_open');
    });
    
    modalCloseButtonMeatBomb.addEventListener('click', function() {
        modalMeatBomb.classList.remove('modal_open');
    });
    }
    
    // Open & Close SuperCheese    
    {
    const productDetailButtonSuperCheese = document.getElementById('SuperCheese');
    const modalSuperCheese = document.getElementById('SuperCheeseModal');
    const modalCloseButtonSuperCheese = document.getElementById('ModalCloseSuperCheese'); //
    
    productDetailButtonSuperCheese.addEventListener('click', function() {
        modalSuperCheese.classList.add('modal_open');
    });
    
    modalCloseButtonSuperCheese.addEventListener('click', function() {
        modalSuperCheese.classList.remove('modal_open');
    });
    }
    
    // Open & Close BigBurger
    {
    const productDetailButtonBigBurger = document.getElementById('BigBurger');
    const modalBigBurger = document.getElementById('BigBurgerModal');
    const modalCloseButtonBigBurger = document.getElementById('ModalCloseBigBurger'); //
    
    productDetailButtonBigBurger.addEventListener('click', function() {
        modalBigBurger.classList.add('modal_open');
    });
    
    modalCloseButtonBigBurger.addEventListener('click', function() {
        modalBigBurger.classList.remove('modal_open');
    });
    }
    
    // Open & Close HeavyPunch
    {
    const productDetailButtonHeavyPunch = document.getElementById('HeavyPunch');
    const modalHeavyPunch = document.getElementById('HeavyPunchModal');
    const modalCloseButtonHeavyPunch = document.getElementById('ModalCloseHeavyPunch'); //
    
    productDetailButtonHeavyPunch.addEventListener('click', function() {
        modalHeavyPunch.classList.add('modal_open');
    });
    
    modalCloseButtonHeavyPunch.addEventListener('click', function() {
        modalHeavyPunch.classList.remove('modal_open');
    }); 
    }
    
    // Open & Close Classical
    {
    const productDetailButtonClassical = document.getElementById('Classical');
    const modalClassical = document.getElementById('ClassicalModal');
    const modalCloseButtonClassical = document.getElementById('ModalCloseClassical'); //
    
    productDetailButtonClassical.addEventListener('click', function() {
        modalClassical.classList.add('modal_open');
    });
    
    modalCloseButtonClassical.addEventListener('click', function() {
        modalClassical.classList.remove('modal_open');
    }); 
    }
    
    // Open & Close Italian
    {
    const productDetailButtonItalian = document.getElementById('Italian');
    const modalItalian = document.getElementById('ItalianModal');
    const modalCloseButtonItalian = document.getElementById('ModalCloseItalian'); //
    
    productDetailButtonItalian.addEventListener('click', function() {
        modalItalian.classList.add('modal_open');
    });
    
    modalCloseButtonItalian.addEventListener('click', function() {
        modalItalian.classList.remove('modal_open');
    });
    }
    }
    