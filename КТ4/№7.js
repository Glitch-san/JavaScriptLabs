let products = [
    {id: 1, title: 'велосипед', price: 45000, count: 3, marks: [5, 5, 5]},
    {id: 2, title: 'самокат', price: 2500, count: 15, marks: [4, 5, 4, 4]},
    {id: 3, title: 'ролики', price: 3500, count: 8, marks: [3, 4, 5]},
    {id: 4, title: 'лыжи', price: 850, count: 12, marks: [5, 5, 4, 5, 4]},
    {id: 5, title: 'коньки', price: 800, count: 20, marks: [4, 4, 3]},
    {id: 6, title: 'скейтборд', price: 1200, count: 5, marks: [5, 5]},
    {id: 7, title: 'шлем', price: 900, count: 25, marks: [4, 5, 5, 4]},
    {id: 8, title: 'наколенники', price: 500, count: 30, marks: [3, 4, 4]},
    {id: 9, title: 'велотренажёр', price: 15000, count: 2, marks: [5, 5, 5, 5]},
    {id: 10, title: 'батут', price: 3000, count: 7, marks: [4, 4, 5, 3]}
];

let task1 = products.filter(p => p.count > 10);
console.log(task1);

let task2 = products.find(p => p.price >= 800 && p.price <= 900);
console.log(task2);

let task3 = [...products].sort((a, b) => b.price - a.price);
console.log(task3);

let task4 = products.reduce((total, p) => total + p.price * p.count, 0);
console.log(task4);

let task5 = products.map(p => ({
        id: p.id,
        title: p.title,
        price: p.price,
        count: p.count,
        marks_total: p.marks.reduce((sum, mark) => sum + mark, 0)})).sort((a, b) => b.marks_total - a.marks_total);
console.log(task5);
