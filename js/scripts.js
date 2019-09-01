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
});
// getting values
function getValue() {
var getSize = document.getElementById("size");
var size = getSize.options[getSize.selectedIndex].value;
var getCrust = document.getElementById("crust");
var crust = getCrust.options[getCrust.selectedIndex].value;
var getToppings = document.getElementById("delivery");
var toppings = getToppings.options[getToppings.selectedIndex].value;
var getAmount = document.getElementById("amount").value;
var getTopping = document.getElementById("topping");
var topping = getTopping.options[getTopping.selectedIndex].value;
// set value
document.getElementById("receiptvalue").innerHTML="Your order: <br>" +size +"<br>" + crust + "<br>" + topping+ "<br>" + getAmount;
  // alert("You have selected " + " ," + size + crust + getAmount + topping);
}
