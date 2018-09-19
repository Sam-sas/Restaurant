function validateForm() {
  var reqName = document.forms["contactForm"]["name"].value;
  var reqEmail = document.forms["contactForm"]["email"].value;
  var reqphone = document.forms["contactForm"]["phone"].value;


  if (reqName == "" || reqEmail == "" || reqphone == "") {
      alert("Please fill out all required information before submitting.");
      return false;
  } else {
    alert("Thank you for your inquiry! We will get back to you within 24 hours.")
  }
}