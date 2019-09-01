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
// getting values
function getValue(){
var jalapeno = document.getElementById("jalapeno2");
var ham =document.getElementById("ham");
var grille=document.getElementById("grille");
};
});
