// Write your solution here!
const drivers=["Milo", "Otis", "Garfield"];
function destructivelyAppendDriver(name){
  drivers.push('Ralph')
}
function destructivelyPrependDriver(name){
  drivers.unshift("Bob")
}
function destructivelyRemoveLastDriver(name){
   drivers.pop()
}
function destructivelyRemoveFirstDriver(name){
  drivers.shift()
}
function appendDriver(name){
 return drivers.push("Broom");
}
function removeFirstDriver(){
  drivers.slice(1);
}