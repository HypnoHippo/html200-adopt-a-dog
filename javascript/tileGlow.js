$(document).ready(function(){
  $('.petcard').mouseenter(function(){
    $(this).css('box-shadow', '0px 0px 8px 5px rgba(119, 66, 184, 0.6)')
  }).mouseleave(function(){
    $(this).css('box-shadow', '0 0.25rem .5rem 0 rgba(0, 0, 0, 0.2)')
  });
});
