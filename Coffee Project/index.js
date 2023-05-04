/*Coffee items
Format:
[id, name, category, price, imageURL,]
*/
let hotDrinks = "hot-items";
let coldDrinks = "cold-items";
let other = "other-items";
function coffeeItem(id, name, type, price, amount, image) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.price = price;
    this.image = image;
    this.amount = amount;
}

// List of items

const inventory = [
    new coffeeItem(1001, "Coffee", hotDrinks, 3.99, 1, "Images/Coffee.jpg"),
    new coffeeItem(1002, "Hot Coco", hotDrinks, 3.99, 1, "Images/Hot CoCo.jpg"),
    new coffeeItem(1003, "Green Tea", hotDrinks, 2.99, 1, "Images/Green Tea.jpg"),
    new coffeeItem(1004, "Black Tea", hotDrinks, 2.99, 1, "Images/Black Tea.jpg"),
    new coffeeItem(1005, "Iced Coffee", coldDrinks, 4.99, 1, "Images/Iced Coffee.jpg"),
    new coffeeItem(1006, "Frappe", coldDrinks, 4.99, 1, "Images/Frappe.jpg"), ,
    new coffeeItem(1007, "Iced Green Tea", coldDrinks, 2.99, 1, "Images/Iced Green Tea.jgp"),
    new coffeeItem(1008, "Iced Black Tea", coldDrinks, 2.9, 1, "Images/Iced Black Tea 2"),
];




//Handle items
let cart = [];

function addToCart(id) {
    const item = inventory.find(item => item.id === id);
    const cartItem = cart.find(item => item.id === id);

    if (!cartItem) {
        cart.push(item);
        updateCartCount();
    }
     cartItem.amount++;

    updateCartCount();
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


function updateCartCount() {
    let cartCount = 0; 
    const cartElement = document.getElementById("cart-count");
    cartElement.innerHTML = "";
    cart.forEach(item => cartCount = item.amount + cartCount);
        const p = document.createElement("p");
        p.textContent = String(cartCount);
        cartElement.appendChild(p);
}
    // let hotItemElement = document.getElementsByClassName(hotDrinks);
    // let coldItemElement = document.getElementsByClassName(coldDrinks);
    // let hotItemList = [];
    // let coldItemList = [];
    // let createDiv = document.createElement("div")
    // let addDrinkName = document.querySelector
    
// const hotItems = document.getElementsByClassName('hot-items')[0];
// const coldItems = document.getElementsByClassName('cold-items')[0];
    
// function makeMenu() {
// inventory.forEach(item => {
//     const newDrink = document.createElement('div');
//     newDrink.classList.add('drink');
//     newDrink.innerHTML = `
//         <h3 class="drink-name" id="${item.id}">${item.name}</h3>
//         <h3 class="drink-price">${item.price}</h3>
//     `;

//     if (item.type === hotDrinks) {
//         hotItems.appendChild(newDrink);
//     } else if (item.type === coldDrinks) {
//         coldItems.appendChild(newDrink);
//     }
// });
// }



// MAKE MENU ON PAGE LOAD
window.onload = function makeMenu() {
    inventory.forEach(function(item) {
      var menuItem = document.createElement('div');
      menuItem.className = 'drink';
      menuItem.innerHTML = '<h3 class="drink-name" id="' + item.id + '">' + item.name + '</h3><h3 class="drink-price">' + item.price + '</h3>';
    
  
      var containers = document.getElementsByClassName('hot-items-container');
      for (var i = 0; i < containers.length; i++) {
        if (item.type === hotDrinks) {
        var container = containers[i];
        var hotItems = container.getElementsByClassName('hot-items')[0];
        hotItems.appendChild(menuItem).addEventListener("click", () => {
            addToCart(item.id)
        });
        } else if (item.type === coldDrinks) {  
      containers = document.getElementsByClassName('cold-items-container');
    //   for (var i = 0; i < containers.length; i++) {
        var container = containers[i];
        var coldItems = container.getElementsByClassName('cold-items')[0];
        coldItems.appendChild(menuItem);
        }
      }
    });
  }


function listCart() {
    var cartList = document.getElementsByClassName('cart-container')[0];
    cartList.innerHTML = "";

    cart.forEach(item => {
        var cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        let itemTotal = item.amount * item.price;
        cartItem.innerHTML = "<div class='image-name-container'>"
        + "<img class='cart-image' src='" + item.image +"'>"
        + "<div class='cart-item-name'>"
        + "<h6 class='item-header'>" + item.name + "</h6>"
        + "<p class='item-subheader'> Price: $" + item.price + "</p>"
        + "</div>"
        + "</div>"
        + "<div class='cart-item-total'>"
        + "<div class='item-total-container'>"
        + "<div class='quantity'>"
        + "<input type='number' id='quantity' name='quantity' value'" + item.amount +"' min='0' placeholder='0'>"
        + "</div>"
        + "<p class'item-total'>Total: $" + itemTotal +"</p>"
        + "</div>"
        + "</div>";
        
        

        cartList.appendChild(cartItem);

    })
    
}


/* 
    <div class="cart-container"> -- Parent

    <div class="cart-item">
        <div class="image-name-container">
            <img class="cart-image" src="Images/Black Tea.jpg">
            <div class="cart-item-name">
                <h6 class="item-header">Black Tea</h6>
                <p class="item-subheader">Price: $2.99</p>
            </div>
        </div>
        <div class="cart-item-total">
            <div class="item-total-container">
              <div class="quantity">
                    <label for="quantity">Quantity</label>
                    <input type="number" id="quantity" name="quantity" min="0" placeholder="0">
                </div>
                <p class="item-total">Total: $4.98</p>
            </div>                            
        </div>
    </div> */