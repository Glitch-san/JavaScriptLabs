function reverseIndex(array){
  let m = [];
  for(let i = array.length - 1; i >= 0; i--){
    m.push(array[i]);
  }
  console.log(m)
}
let array = [1,2,3,4,5]
reverseIndex(array)
