function successAlert() {
  let results = [
      document.getElementById('name').value,
      document.getElementById('email').value,
      document.getElementById('address').value,
      document.getElementById('state').value,
      document.getElementById('city').value,
      document.getElementById('zip').value,
      document.getElementById('yes').checked,
      document.getElementById('no').checked,
      document.getElementById('location').value
  ];

  console.log(results);

  alert("Thank you. The form information has been received");
}
