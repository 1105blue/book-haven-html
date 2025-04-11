// Existing Functions

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


// Subscribe Feature Validation Code

document.getElementById("subscribeForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting immediately

  // Clear any previous error message
  const errorMsg = document.getElementById("errorMsg");
  errorMsg.textContent = '';

  // Retrieve and trim the email input value
  const emailInput = document.getElementById("subscribeEmail").value.trim();

  // Basic email validation regex pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check if the email matches the pattern
  if (!emailRegex.test(emailInput)) {
    errorMsg.textContent = "Please enter a valid email address.";
    return;
  }

  // If validation passes, perform your subscribe action (e.g., send an AJAX request)
  // For now, we'll simply alert a message
  alert("Thank you for subscribing!");

  // Optionally, reset the form after successful submission
  document.getElementById("subscribeForm").reset();
});
