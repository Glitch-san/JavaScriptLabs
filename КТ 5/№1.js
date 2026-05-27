let phones = [ 
    '590.423.4568', 
    '650.124.7234', 
    '650.507.9879', 
    '011.44.1343.529268', 
    '011.44.1344.478968', 
    '011.44.1644.429267', 
    '11.44.1343.52', 
    '11.44.1643.52'
];

let result = [];
for (let i = 0; i < phones.length; i++) {
    let num = phones[i];
    let newnum = '';
    let index = -1;
    
    for (let j = 0; j < num.length; j++) {
        if (num[j] === '.') {
            index = j;
        }
    }
    
    for (let j = 0; j <= index; j++) {
        newnum = newnum + num[j];
    }
    newnum = newnum + num[index + 1];
    newnum = newnum + '****';
    
    result.push(newnum);
}

console.log(result);
