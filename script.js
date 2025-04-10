
let cartCount = 0;

function subscribe() {
  alert("Thank you for subscribing.");
}

function addToCart() {
  cartCount++;
  alert("Item added to the cart.");
}

function clearCart() {
  if (cartCount > 0) {
    cartCount = 0;
    alert("Cart cleared.");
  } else {
    alert("No items to clear.");
  }
}

function processOrder() {
  if (cartCount > 0) {
    alert("Thank you for your order.");
    cartCount = 0;
  } else {
    alert("Cart is empty.");
  }
}

function thankYouMessage() {
  alert("Thank you for your message.");
}
