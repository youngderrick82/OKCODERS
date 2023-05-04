<div class="navbar">
  <h3 class="logo-name">Dream Coffee Company</h3>
  <ul class="nav-menu">
    <li><a alt="home" href="Home.html">Home</a></li>
    <li><a class="active-page" alt="menu" href="menu.html">Menu</a></li>
    <li><a alt="about us" href="about-us.html">About Us</a></li>
    <li><a alt="contact us" href="contact-us.html">Contact Us</a></li>
  </ul>
  <div class="cart-icon">
    <i class="fa-solid fa-shopping-cart fa-lg"></i>
    <span class="cart-count">0</span>
  </div>
</div>


function coffeeItem(id, name, type, price) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.price = price;
    this.amount = 0;
  }

  
  const drinkElements = document.querySelectorAll('.drink');
const cartCountElement = document.querySelector('.cart-count');

drinkElements.forEach((drinkElement) => {
  const drinkNameElement = drinkElement.querySelector('.drink-name');
  const drinkPriceElement = drinkElement.querySelector('.drink-price');
  const itemId = parseInt(drinkNameElement.id);
  const item = inventory.find((item) => item.id === itemId);

  drinkElement.addEventListener('click', () => {
    item.amount++;
    cartCountElement.textContent = parseInt(cartCountElement.textContent) + 1;
  });
});

const cartIconElement = document.querySelector('.cart-icon');
const modalElement = document.querySelector('.modal');
const modalContentElement = document.querySelector('.modal-content');

cartIconElement.addEventListener('click', () => {
  modalElement.style.display = 'block';

  modalContentElement.innerHTML = '';

  let total = 0;
  inventory.forEach((item) => {
    if (item.amount > 0) {
      const itemTotal = item.price * item.amount;
      total += itemTotal;

      const itemElement = document.createElement('div');
      itemElement.classList.add('modal-item');

      const itemNameElement = document.createElement('span');
      itemNameElement.textContent = `${item.name} x ${item.amount}`;

      const itemPriceElement = document.createElement('span');
      itemPriceElement.textContent = `$${itemTotal.toFixed(2)}`;

      itemElement.appendChild(itemNameElement);
      itemElement.appendChild(itemPriceElement);
      modalContentElement.appendChild(itemElement);
    }
  });

  const totalElement = document.createElement('div');
  totalElement.classList.add('modal-total');
  totalElement.textContent = `Total: $${total.toFixed(2)}`;
  modalContentElement.appendChild(totalElement);
});

modalElement.addEventListener('click', (event) => {
  if (event.target === modalElement) {
    modalElement.style.display = 'none';
  }
});


To create a functional cart, you would need to add some additional HTML and JavaScript code to your existing code. Here is an example implementation:

HTML:
Add a new section to the page to display the cart and a button to clear the cart and proceed to checkout.

```html
<div class="cart-section">
  <h2>Cart</h2>
  <ul id="cart"></ul>
  <button onclick="clearCart()">Clear Cart and Proceed to Checkout</button>
</div>
```

JavaScript:
Add a new function to handle cart operations and update the HTML when items are added or removed from the cart.

```javascript
let cart = [];

function addToCart(id) {
  const item = inventory.find(item => item.id === id);
  if (!item) {
    console.error(`Item with id ${id} not found in inventory.`);
    return;
  }
  cart.push(item);
  updateCart();
}

function removeFromCart(id) {
  const index = cart.findIndex(item => item.id === id);
  if (index === -1) {
    console.error(`Item with id ${id} not found in cart.`);
    return;
  }
  cart.splice(index, 1);
  updateCart();
}

function clearCart() {
  cart = [];
  updateCart();
}

function updateCart() {
  const cartElement = document.getElementById('cart');
  cartElement.innerHTML = '';
  cart.forEach(item => {
    const li = document.createElement('li');
    li.innerText = `${item.name} - $${item.price}`;
    cartElement.appendChild(li);
  });
}
```

Finally, you need to modify the HTML code to call the `addToCart()` function when a user clicks on a drink name in the menu.

```html
<h3 class="drink-name" id="1001" onclick="addToCart(1001)">Coffee</h3>
```

Now when a user clicks on a drink name, the item will be added to the cart and the cart will be updated on the page. Clicking on the "Clear Cart and Proceed to Checkout" button will clear the cart and allow the user to proceed to checkout.