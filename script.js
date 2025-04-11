
function subscribe() {
  const email = document.getElementById("subscribe-email").value.trim();
  if (email === "") {
    alert("Please enter a valid email address.");
  } else {
    alert("Thank you for subscribing!");
  }
}
