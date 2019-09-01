$(document).ready(function() {

  $('.owl-carousel').owlCarousel({
    margin:10,
    autoWidth:true,
    items:4
  })
  $("#topping1").hover(function(){
    $(".topping1").toggle(500);
  });
  $("#topping2").hover(function(){
    $(".topping2").toggle(500);
  });
  $("#topping3").hover(function(){
    $(".topping3").toggle(500);
  });
  $("#topping4").hover(function(){
    $(".topping4").toggle(500);
  });
  $("#topping5").hover(function(){
    $(".topping5").toggle(500);
  });
  $("form#new-contact").submit(function(event) {
    event.preventDefault();
})
var pizza1=document.getElementById("pizza1").value;
var pizza2=document.getElementById("pizza2").value;
var pizza3=document.getElementById("pizza3").value;
});
