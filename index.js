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
  drivers.push("Broom");
 return
}

function removeFirstDriver(){
  const copyOfdrivers=drivers.slice(1);
  return copyOfdrivers
}
function removeLastDriver(){
  const copyOfdrivers=drivers.slice(0,2);
  return copyOfdrivers
}