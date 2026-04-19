function checkElem(array, callback){
  for(let i = 0; i < array.length; i++){
    if (callback(array[i])){
      return true;
    }
  }
  return false;
}
console.log(checkElem([1, 2, 3, 4], (e) => e == 3)
