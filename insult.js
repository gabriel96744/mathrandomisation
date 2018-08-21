var arr = [
	" is blue",
  " is purple",
  " is green",
  " is red",];
 var name = prompt("what is your name?");
var x = (Math.floor(Math.random() * arr.length));
window.alert(name + arr[x]);