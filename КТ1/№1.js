let price = Number(prompt("Введите числовое значение"));
let range = prompt("Введите day/week/month");
if (range == "day") {
    let A = price + "Р в день";
    console.log(A);
}
else if (range == "week") {
    let A = price + "Р в неделю";
    console.log(A);
}
else if (range == "month") {
    let A = price + "Р в месяц";
    console.log(A);
}
else {
    console.log("Э, брат, так дело не пойдёт!");
}
