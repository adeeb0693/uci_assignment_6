document.querySelector('#button').addEventListener('click', e => {
    // Add any code here that you want to run when the button is clicked
    const email = prompt("Please enter your email to subscribe to our newsletter:", "Email@email.com");
  if (email != null) {
    document.getElementById("demo").innerHTML =
    `Thank you for subscribing. We will send weekly newsletters to ${email}!`;
  }

});
