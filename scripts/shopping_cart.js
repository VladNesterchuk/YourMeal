{
  // Перша частина: додавання товарів до кошика

  // Select all "Додати" (Add) buttons
  const addToCartButtons = document.querySelectorAll(".product__add");

  // Function to add product to cart
  function addToCart(product) {
    // Get product details (assuming data is available in the product element)
    const title = product.querySelector(".product__title button").textContent;
    const weight = product.querySelector(".product__weight").textContent;
    const price = parseFloat(product.querySelector(".product__price").textContent);
    const imageSrc = product.querySelector(".product__image").getAttribute("src");

    // Create a new list item for the cart
    const cartItem = document.createElement("li");
    cartItem.classList.add("order__item");

    // Create the product image element
    const cartImage = document.createElement("img");
    cartImage.classList.add("order__image");
    cartImage.setAttribute("src", imageSrc);
    cartImage.setAttribute("alt", title);

    // Create the product details container
    const cartProduct = document.createElement("div");
    cartProduct.classList.add("order__product");

    // Create the product title element
    const cartTitle = document.createElement("h3");
    cartTitle.classList.add("order__product-title");
    cartTitle.textContent = title;

    // Create the product weight element
    const cartWeight = document.createElement("p");
    cartWeight.classList.add("order__product-weight");
    cartWeight.textContent = weight;

    // Create the product price element
    const cartPrice = document.createElement("p");
    cartPrice.classList.add("order__product-price");
    cartPrice.textContent = price.toFixed(2); // Format price to two decimal places
    const currencySpan = document.createElement("span");
    currencySpan.classList.add("currency");
    currencySpan.textContent = "₴";
    cartPrice.appendChild(currencySpan);

    // Create the product quantity section
    const cartProductCount = document.createElement("div");
    cartProductCount.classList.add("order__product-count", "count");

    // Create the "minus" button
    const countMinus = document.createElement("button");
    countMinus.classList.add("count__minus");
    countMinus.textContent = "-";

    // Create the quantity display
    const countAmount = document.createElement("p");
    countAmount.classList.add("count__amount");
    countAmount.textContent = 1; // Initial quantity

    // Create the "plus" button
    const countPlus = document.createElement("button");
    countPlus.classList.add("count__plus");
    countPlus.textContent = "+";

    // Add elements to the cart item structure
    cartProductCount.appendChild(countMinus);
    cartProductCount.appendChild(countAmount);
    cartProductCount.appendChild(countPlus);
    cartProduct.appendChild(cartTitle);
    cartProduct.appendChild(cartWeight);
    cartProduct.appendChild(cartPrice);
    cartItem.appendChild(cartImage);
    cartItem.appendChild(cartProduct);
    cartItem.appendChild(cartProductCount);

    // Find the cart list element
    const cartList = document.querySelector(".order__list");

    // Add the cart item to the cart list
    cartList.appendChild(cartItem);

    // Update cart total and count
    calculateTotalAmount();
    updateCartCount();
    checkCartIsEmpty();

    // Handle quantity changes
    countMinus.addEventListener("click", function () {
      changeQuantity(cartItem, -1);
    });
    countPlus.addEventListener("click", function () {
      changeQuantity(cartItem, 1);
    });
  }

  // Add click event listener to all "Додати" buttons
  addToCartButtons.forEach(button => {
    button.addEventListener("click", function () {
      const product = button.closest(".product"); // Get the closest product element
      addToCart(product);
    });
  });

  // Друга частина: підрахунок загальної вартості та кількості товарів

  // Отримати елементи
  const cartItemsList = document.querySelector('.order__list');
  const cartTotalAmount = document.querySelector('.order__total-amount');
  const orderSubmitButton = document.getElementById('OrderSubmit');
  const orderDetails = document.getElementById('orderDetails');
  const freeDelivery = document.getElementById('freeDelivery');
  const cartEmptyMessage = document.createElement('p');
  cartEmptyMessage.classList.add('order__empty-message');
  cartEmptyMessage.textContent = '';
  const cartItemCount = document.querySelector('.order__count');

  // Перевірити, чи кошик порожній
  function checkCartIsEmpty() {
    if (cartItemsList.childElementCount === 0 && window.innerWidth > 1024) {
      cartTotalAmount.textContent = '0 ';
      orderSubmitButton.disabled = true;
      cartItemsList.appendChild(cartEmptyMessage);
      orderDetails.classList.add('hidden');
    } else {
      if (cartEmptyMessage.parentNode) {
        cartEmptyMessage.parentNode.removeChild(cartEmptyMessage);
      }
      orderSubmitButton.disabled = false;
      orderDetails.classList.remove('hidden');
    }
  }

  // Функція для зміни кількості товарів
  function changeQuantity(cartItem, change) {
    const amountElement = cartItem.querySelector('.count__amount');
    let amount = parseInt(amountElement.textContent);
    amount += change;

    if (amount === 0) {
      cartItem.remove();
    } else {
      amountElement.textContent = amount;
    }

    // Перерахувати загальну суму та кількість товарів
    calculateTotalAmount();
    updateCartCount();
    checkCartIsEmpty();
  }

  // Функція для розрахунку загальної суми
  function calculateTotalAmount() {
    let totalAmount = 0;
    const cartItems = cartItemsList.querySelectorAll('.order__item');
    cartItems.forEach(cartItem => {
      const productPriceElement = cartItem.querySelector('.order__product-price');
      const productPrice = parseFloat(productPriceElement.textContent.replace('₴', ''));
      const productCountElement = cartItem.querySelector('.count__amount');
      const productCount = parseInt(productCountElement.textContent);
      totalAmount += productPrice * productCount;
    });

    cartTotalAmount.textContent = totalAmount.toFixed(2) + ' ';

    // Показати або приховати повідомлення про безкоштовну доставку
    if (totalAmount > 800) {
      freeDelivery.classList.remove('hidden');
    } else {
      freeDelivery.classList.add('hidden');
    }
  }

  // Функція для оновлення кількості товарів у кошику
  function updateCartCount() {
    const cartItems = cartItemsList.querySelectorAll('.order__item');
    let totalCount = 0;
    cartItems.forEach(cartItem => {
      const productCountElement = cartItem.querySelector('.count__amount');
      const productCount = parseInt(productCountElement.textContent);
      totalCount += productCount;
    });

    cartItemCount.textContent = totalCount;
  }

  // Запуск перевірки, чи кошик порожній
  document.addEventListener('DOMContentLoaded', checkCartIsEmpty);

  // З модального вікна в кошик
  document.addEventListener('DOMContentLoaded', () => {
    const cart = [];

    // Function to update the cart
    const updateCart = () => {
      console.log('Cart updated:', cart);
      // Implement your cart update logic here (e.g., update UI)
      calculateTotalAmount();
      updateCartCount();
      checkCartIsEmpty();
    };

    // Function to handle count changes
    const handleCountChange = (productId, increment) => {
      const countElement = document.querySelector(`.count__amount[data-count-id="${productId}"]`);
      let currentCount = parseInt(countElement.innerText);
      currentCount = increment ? currentCount + 1 : currentCount - 1;
      if (currentCount < 1) currentCount = 1;
      countElement.innerText = currentCount;
    };

    // Add event listeners for plus and minus buttons
    document.querySelectorAll('.count__minus').forEach(button => {
      button.addEventListener('click', () => {
        const productId = button.getAttribute('data-count-id');
        handleCountChange(productId, false);
      });
    });

    document.querySelectorAll('.count__plus').forEach(button => {
      button.addEventListener('click', () => {
        const productId = button.getAttribute('data-count-id');
        handleCountChange(productId, true);
      });
    });

    // Function to add product to cart
    function addToCart(productId) {
      const countElement = document.querySelector(`.count__amount[data-count-id="${productId}"]`);
      const count = parseInt(countElement.innerText);
      const priceElement = document.querySelector(`.modal-product__footer[data-product-id="${productId}"] .modal-product__price`);
      const price = parseFloat(priceElement.textContent);

      const existingProductIndex = cart.findIndex(item => item.id === productId);
      if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += count;
      } else {
        cart.push({
          id: productId,
          quantity: count,
          price: price
        });
      }

      updateCart();
    }

    // Add event listener for the "Add to cart" button
    document.querySelectorAll('.modal-product__btn').forEach(button => {
      button.addEventListener('click', () => {
        const productId = button.getAttribute('data-product-id');
        addToCart(productId);
      });
    });

    // Functions to handle cart updates
    const calculateTotalAmount = () => {
      let totalAmount = 0;
      cart.forEach(item => {
        totalAmount += item.price * item.quantity;
      });

      const cartTotalAmount = document.querySelector('.order__total-amount');
      cartTotalAmount.textContent = totalAmount.toFixed(2) + ' ';

      const freeDelivery = document.getElementById('freeDelivery');
      if (totalAmount > 800) {
        freeDelivery.classList.remove('hidden');
      } else {
        freeDelivery.classList.add('hidden');
      }
    };

    const updateCartCount = () => {
      let totalCount = 0;
      cart.forEach(item => {
        totalCount += item.quantity;
      });

      const cartItemCount = document.querySelector('.order__count');
      cartItemCount.textContent = totalCount;
    };

    // Check if the cart is empty
const checkCartIsEmpty = () => {
  const cartItemsList = document.querySelector('.order__list');
  const cartTotalAmount = document.querySelector('.order__total-amount');
  const orderSubmitButton = document.getElementById('OrderSubmit');
  const orderDetails = document.getElementById('orderDetails');
  const freeDelivery = document.getElementById('freeDelivery');
  const cartEmptyMessage = document.createElement('p');
  cartEmptyMessage.classList.add('order__empty-message');
  cartEmptyMessage.textContent = 'Кошик порожній';
  const cartItemCount = document.querySelector('.order__count');

  if (cartItemsList.childElementCount === 0 && window.innerWidth > 1024) {
    cartTotalAmount.textContent = '0 ';
    orderSubmitButton.disabled = true;
    if (!cartItemsList.querySelector('.order__empty-message')) { // Check if the message is not already present
      cartItemsList.appendChild(cartEmptyMessage);
    }
    orderDetails.classList.add('hidden');
  } else {
    if (cartItemsList.querySelector('.order__empty-message')) { // Check if the message is present
      cartItemsList.removeChild(cartEmptyMessage);
    }
    orderSubmitButton.disabled = false;
    orderDetails.classList.remove('hidden');
  }
}})}
