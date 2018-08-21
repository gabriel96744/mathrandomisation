var method = [
	" boil",
  " deep fry",
  " pan fry",
  " broil",
  " sear",
  " steam",
  " baked"];
 var food = [
 " noodle",
 " musubi",
 " steak",
 " pork",
 " carrots",
 " oreo",
 " bacon",
 " spaghetti",
 " egg",
 " ramen",
 " ham",
 " baby back ribs",
 " ice cream",
 " chicken",
 " pizza",
 " cake",
 " fish",
 " tomato",
 " rice"
 ];
var cook = (Math.floor(Math.random() * method.length));
var item = (Math.floor(Math.random() * food.length));
window.alert(method[cook] + food[item]);