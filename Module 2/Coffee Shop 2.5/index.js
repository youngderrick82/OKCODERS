
function menuItem(name, description, price, count) {
    this.name = name;
    this.description = description;
    this.price = price;
    this.count = count;
}

let menuList = [
    new menuItem("Hot Coffee", "Delicious hot coffee delivered at the perfect temperature.", 3.99, 1),
    new menuItem("Iced Coffee", "Yummy in the tummy cold iced coffee for those days you want a tasty coffee treat in a cool comfortable fashion", 4.49, 1),
    new menuItem("Hot Cocoa", "Our own in-house special ingredient that will make you feel at home every single time", 2.99, 1),
    new menuItem("Hot Tea", "Organic herbal tea delivered hot and steamy with the best ingredient on the market", 2.99, 1),
    new menuItem("Iced Tea", "Get the same sophisticated taste from our hot tea presented as refreshing cold beverage for your pleasure", 2.99, 1)
];


window.onload = function addToMenu() {
    menuList.forEach(function(item) {
        var menuSlot = document.createElement('div');
        menuSlot.className = "menu-item";
        menuSlot.innerHTML = "<h3 class='menu-name'>" + item.name + "</h3> <p class='menu-desc'>" + item.description + "</p> <h3 class='menu-price'>" + item.price + "</h3>";
        var menuTarget = document.getElementsByClassName('menu')[0];
        menuTarget.appendChild(menuSlot).addEventListener("click", () => {
            addToCart(item.name) })
});
}

let cart = [];

function addToCart(name) {
    const item = menuList.find(item => item.name === name);
    const cartItem = cart.find(item => item.name === name);

    if(!cartItem) {
        cart.push(item)
        displayCart();
    }
    cartItem.count++;
    displayCart();
}

function clearCart() {
    cart = [];
}

function displayCart() {
    var cartTotalLine = document.getElementById('cart-total');
    var cartTotal = 0;
    var cartTarget = document.getElementsByClassName('cart-container')[0];
    cartTarget.innerHTML = '';
    cart.forEach(function(item) {
        var cartSlot = document.createElement('div');
        var itemTotal = item.price * item.count;
        cartSlot.className = "cart-item";
        cartSlot.innerHTML = '<h3 class="cart-item-name">' + item.name + '</h3><h3 class="cart-item-count">' + item.count + '</h3></h3><h3 class="cart-item-price">' + item.price + '</h3><h3 class="cart-item-total">' + itemTotal.toFixed(2) + '</h3>';
        
        cartTarget.appendChild(cartSlot);
        cartTotal += itemTotal;
    });
    cartTotalLine.innerHTML = '$' + cartTotal.toFixed(2);
}

let cartLine = document.getElementById('cart-line');
cartLine.addEventListener("click", displayCart);