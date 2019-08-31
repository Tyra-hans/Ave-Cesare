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
});
$("#add-address").click(function() {
  $("#new-addresses").append('<div class="new-address">' +
                               '<div class="form-group">' +
                                 '<label for="new-street">Street</label>' +
                                 '<input type="text" class="form-control new-street">' +
                               '</div>' +
                               '<div class="form-group">' +
                                 '<label for="new-city">City</label>' +
                                 '<input type="text" class="form-control new-city">' +
                               '</div>' +
                               '<div class="form-group">' +
                                 '<label for="new-county">County</label>' +
                                 '<input type="text" class="form-control new-county">' +
                               '</div>' +
                             '</div>');
});
$("#new-contact").submit(function(event) {
  event.preventDefault();

  var inputtedFName = $("#new-name").val();
  var newContact = new Contact(inputtedName);

  $(".new-address").each(function() {
    var inputtedStreet = $(this).find(".new-street").val();
    var inputtedCity = $(this).find(".new-city").val();
    var inputtedCounty = $(this).find(".new-county").val();
    var newAddress = new Address(inputtedStreet, inputtedCity, inputtedCounty)
    newContact.addresses.push(newAddress)
  });

  $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

  $(".contact").last().click(function() {
    $("#show-contact").show();
    $("#show-contact h2").text(newContact.fullName());
    $(".first-name").text(newContact.firstName);
    $(".last-name").text(newContact.lastName);
    $("ul#addresses").text("");
    newContact.addresses.forEach(function(address) {
      $("ul#addresses").append("<li>" + address.street + ", " + address.city + " " + address.county + "</li>");
    });
  });

  $("input#new-first-name").val("");
  $("input#new-last-name").val("");
  $("input.new-street").val("");
  $("input.new-city").val("");
  $("input.new-county").val("");
  address.prototype.fullAddress= function(){
    return this.street + this.city + this.county;
  }
});
