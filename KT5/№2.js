let phones = [
    '4000 0012 0056 9499',
    '4000 0013 5456 7379',
    '4000 0014 1456 9869',
    '4000 0015 3466 7859',
    '4000 0016 3556 6899',
    '4000 0017 4456 4699'
];

let result = [];
for (let i = 0; i < phones.length; i++) {
    let card = phones[i];
    
    let notspaces = '';
    for (let j = 0; j < card.length; j++) {
        if (card[j] !== ' ') {
            notspaces = notspaces + card[j];
        }
    }
    
    let f4 = '';
    for (let j = 0; j < 4; j++) {
        f4 = f4 + notspaces[j];
    }
    
    let l4 = '';
    let len = notspaces.length;
    for (let j = len - 4; j < len; j++) {
        l4 = l4 + notspaces[j];
    }
    
    let glue = f4 + '*****' + l4;
    result.push(glue);
}

console.log(result);
