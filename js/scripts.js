
// getting values for pizza
function getValue() {
  var getPizza = document.getElementById("pizza7");
  var pizza =getPizza.options[getPizza.selectedIndex].value;
  var getSize = document.getElementById("size");
  var size = getSize.options[getSize.selectedIndex].value;
  var getCrust = document.getElementById("crust");
  var crust = getCrust.options[getCrust.selectedIndex].value;
  var getToppings = document.getElementById("delivery");
  var toppings = getToppings.options[getToppings.selectedIndex].value;
  var getAmount = document.getElementById("amount").value;
  var getTopping = document.getElementById("topping");
  var topping = getTopping.options[getTopping.selectedIndex].value;
  var getDelivery = document.getElementById("delivery");
  var delivery = getDelivery.options[getDelivery.selectedIndex].value;
  // set values for variables
  document.getElementById("receiptvalue").innerHTML="Your order: <br>" + pizza + "</br>" +size +"<br>"
  + crust + "<br>" + topping+ "<br>" + getAmount + "<br>" + delivery;
  var pizzaNum = parseInt(pizza);
  var sizeNum = parseInt(size);
  var crustNum = parseInt(crust);
  var toppingNum = parseInt(topping);
  var getAmountNum = parseInt(getAmount);
  var deliveryNum = parseInt(delivery);
  var total = (((pizzaNum + sizeNum + crustNum + toppingNum) *getAmountNum) + deliveryNum);
  console.log(total);
  document.getElementById("receiptvalue1").innerHTML="Your total charge: " + total;
  // getting name and adress values
  var name =document.getElementById("name").value;
  var number=document.getElementById("number").value;
  var adress=document.getElementById("address").value;
  // form validation
  if((pizza == "") || (size == "") || (crust == "") || (topping == "") || (getAmount== 0 ) || (name == "")){
    alert ("please fill all fields");
    return false;
  }else {
    alert("your order is on the way " + name + "!");
  }
}
