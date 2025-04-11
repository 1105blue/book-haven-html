
function subscribe() {
  const emailInput = document.getElementById("subscribe-email");
  const email = emailInput.value.trim();

  if (!email) {
    alert("Please enter a valid email address.");
  } else {
    alert("Thank you for subscribing!");
    emailInput.value = "";
  }
}
