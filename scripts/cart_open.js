document.addEventListener('DOMContentLoaded', function () {
    const orderOpen = document.getElementById('OrderOpen');
    const orderClose = document.getElementById('OrderClose');
    const catalogOrder = document.getElementById('CatalogOrder');

    orderOpen.addEventListener('click', function () {
        catalogOrder.classList.add('order_open');
    });

    orderClose.addEventListener('click', function () {
        catalogOrder.classList.remove('order_open');
    });
});
