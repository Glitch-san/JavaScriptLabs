let a = Number(prompt("Введите число 'a'"));
let b = Number(prompt("Введите число 'b'"));
let sign = prompt("Введите оператор");
if (sign == "+") {
  console.log (a + b);
}
else if (sign == "-") {
  console.log (a - b);
}
else if (sign == "*") {
  console.log (a * b);
}
else if (sign == "/") {
  if (b == 0) {
    console.log ("На 0 делить нельзя!");
  }
  else {
    console.log (a / b);
  }
}
