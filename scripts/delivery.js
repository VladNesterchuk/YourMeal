document.addEventListener('DOMContentLoaded', function () {
    const pickupRadio = document.getElementById('pickup');
    const deliveryRadio = document.getElementById('delivery');
    const addressFieldset = document.getElementById('addressFieldset');
    const submitButton = document.getElementById('submit');

    function toggleAddressFieldset() {
        if (pickupRadio.checked) {
            addressFieldset.classList.add('modal-delivery__fieldset_hide');
        } else {
            addressFieldset.classList.remove('modal-delivery__fieldset_hide');
        }
    }

    pickupRadio.addEventListener('change', toggleAddressFieldset);
    deliveryRadio.addEventListener('change', toggleAddressFieldset);

    toggleAddressFieldset();

    submitButton.addEventListener('click', function(event) {
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('number').value.trim();
        const street = document.getElementById('street').value.trim();

        if (!name || !phone) {
            alert('Заповніть всі поля!');
            event.preventDefault();
        } else if (deliveryRadio.checked && !street) {
            alert('Complete all inputs!');
            event.preventDefault();
        }
    });
});

// Open & Close Modal
const OrderSubmitModal = document.getElementById('OrderSubmitModal');
const ModalClose = document.getElementById('CloseOrderSubmit');
const ModalOpen = document.getElementById('OrderSubmit');

ModalOpen.addEventListener('click', function() {
    OrderSubmitModal.classList.add('modal_open');
});

ModalClose.addEventListener('click', function() {
    OrderSubmitModal.classList.remove('modal_open');
});