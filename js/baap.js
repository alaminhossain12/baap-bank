document.getElementById("btn-submit").addEventListener("click", function () {
  // console.log("Submit Button Clicked");
  const userField = document.getElementById("user-field");
  const email = userField.value;
  // console.log(email);
  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;
  // console.log(email, password);
  if (email === "sontan@baap.com" && password === "secret") {
    window.location.href = "bank.html";
  } else {
    alert("Baap er bank e kono taka nai");
  }
  userField.value = "";
});
