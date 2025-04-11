function addToCart(item) {
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  cart.push(item);
  sessionStorage.setItem("cart", JSON.stringify(cart));
  alert("Item added to the cart.");
}

function viewCart() {
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  if (cart.length > 0) {
    alert("Items in cart:\n" + cart.join("\n"));
  } else {
    alert("Your cart is currently empty.");
  }
}

function clearCart() {
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  if (cart.length > 0) {
    sessionStorage.removeItem("cart");
    alert("Cart cleared.");
  } else {
    alert("No items to clear.");
  }
}

function processOrder() {
  let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  if (cart.length > 0) {
    sessionStorage.removeItem("cart");
    alert("Thank you for your order.");
  } else {
    alert("Cart is empty.");
  }
}

function saveCustomOrder() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  if (!name || !email || !message) {
    alert("Please fill out all fields.");
    return;
  }
  const order = { name, email, message };
  localStorage.setItem("customOrder", JSON.stringify(order));
  alert("Your custom order info has been saved!");
}


function subscribe() {
  const email = document.getElementById("subscribe-email").value;
  if (email.trim() === "") {
    alert("Please enter a valid email address.");
  } else {
    alert("Thank you for subscribing!");
  }
}
