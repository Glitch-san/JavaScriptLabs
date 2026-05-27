function getInfo(prices) {
    let cena = 0;
    let dollar = 0;
    
    for (let i = 0; i < prices.length; i++) {
        let item = prices[i];
        
        if (item[0] === 'Ц' && item[1] === 'е' && item[2] === 'н' && item[3] === 'а') {
            cena++;
        }
        
        let index = item.length - 1;
        if (item[index] === '$') {
            dollar++;
        }
    }
    
    return [cena, dollar];
}

let prices = [
    'Цена товара - 1200$',
    'Стоимость - 500$',
    'Цена не определена',
    '9999',
    'Ценовая категория - больше 300$',
    'Цена за услугу 500 EUR',
    '150$'
];

console.log(getInfo(prices));
