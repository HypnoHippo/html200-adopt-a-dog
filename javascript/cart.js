$(document).ready(function(){
  let total = 0.00;

  $('button.adopt').click(function(){
    total += 123.45;
    $('#cart-total').html('$' + total.toFixed(2));
    alert("Cart Total: $" + total.toFixed(2));
    $(this).off();
  });

  $('button.petcard-button-more').click(function(){
    total += 123.45;
    $('#cart-total').html('$' + total.toFixed(2));
    alert("Cart Total: $" + total.toFixed(2));
    $(this).off();
  });
});
