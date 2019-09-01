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


//var size = document.getElementById("size").value;
var getSize = document.getElementById("size");
var size = getSize.options[getSize.selectedIndex].value;
var getCrust = document.getElementById("crust");
var crust = getCrust.options[getCrust.selectedIndex].value;
var getToppings = document.getElementById("delivery");
var toppings = getToppings.options[getToppings.selectedIndex].value;
var getAmount = document.getElementById("amount").value;
topping
var getTopping = document.getElementById("topping");
var topping = getTopping.options[getTopping.selectedIndex].value;
// var toppings = getToppings.options[getToppings.selectedIndex].value;


// var displaySize=size.options[size.selectedIndex].text;
// document.getElementById('receiptvalue').value=displaySize;
// var ham =document.getElementById("pizza2").value;
// var grille=document.getElementById("pizza3").value;

  alert("You have selected " + " ," + size + crust + getAmount + topping);
}
