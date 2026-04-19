function changeElem(array, n){
  let arr = [];
  for(let i = 0; i < array.length; i++){
    arr.push(array[i] * n);
  }
  console.log(arr);
}
let a = [1, 2, 3];
changeElem(a, 9);
