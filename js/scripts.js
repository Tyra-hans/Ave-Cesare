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
$("#next").click(function() {
    $("#add-address").toggle();
    $("#crust").toggle();
  });
  $("#subit-now").click(function(event){
    event.preventDefault();
    var inputtedName = $("input#new-first-name").val();
    var newContact = new Contact(inputtedFirstName);

    $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedEstate = $(this).find("input.new-estate").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedInstructions = $(this).find("input.new-instructions").val();
      var newAddress = new Address(inputtedStreet,inputtedEstate, inputtedCity, inputtedInstructions)
      newContact.addresses.push(newAddress)
    });

  })
});
