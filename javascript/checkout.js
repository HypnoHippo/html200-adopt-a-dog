$('#submit').click(function(){
  let results = [
      $('#name').val(),
      $('#email').val(),
      $('#address').val(),
      $('#state').val(),
      $('#city').val(),
      $('#zip').val(),
      $('input[type=radio][name=first-time]:checked').val(),
      $('#location').val()
  ];

  console.log(results);

  alert("Thank you. The form information has been received");
});
