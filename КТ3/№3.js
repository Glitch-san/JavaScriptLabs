function sumElems(array){
  let r = 0;
  for(let i = 0; i < array.length; i++){
    if (isNaN(array[i])){}else{
      r += Number(array[i]);
    }
  }
  return(r)
}
let array = ["10", "Строка", "5g", "15", "05"];
let result = sumElems(array);
console.log(result)
