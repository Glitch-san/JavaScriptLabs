let array = [ 
    {id: 1, name: 'apple'}, 
    {id: 2, name: 'watermelon'}, 
    {id: 3, name: 'qiwi'}, 
    {id: 4, name: 'lemon'} 
]
let arr = array.map(item => [item.id, item.name]);
console.log(arr)
