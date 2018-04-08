//for (var i = 1; i < 100; i ++){
  


function forLoop(array){
  for(var i = 0; i < 25; i++){
  if (i===1){
  array.unshift("I am 1 strange loop.");
  }
  else{
  array.push(`I am ${i} "strange loops.`);
  }
  }
  return array;
}

function whileLoop(number){
  for(let number = number; number--;){
    console.log(number);
  }
  if (number === 0){
    return `done`;
  }
}

function doWhileLoop(array){
  function maybeTrue() === false{
    return 
    
  }
  array.length > 0 && maybeTrue()
  
  return array;
}