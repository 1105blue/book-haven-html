function validateSubscribe() {
    const emailInput = document.getElementById("subscribeEmail").value;
    if (!emailInput.includes("@")) {
        alert("Please enter a valid email address.");
        return false;
    }
    alert("Thank you for subscribing!");
    return false;
}