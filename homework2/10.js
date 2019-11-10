/*Спросите у пользователя число. Выведите с помощью alert квадрат этого числа.*/
var chas = Number(prompt("Введите число", 777))
if (String(chas/10) == "NaN") {
    do 
    chas = Number(prompt("Введите число, Вы вводили другие символы"))
    while (String(chas/10) == "NaN")
}
alert("Квадрат числа " + chas + " равен " + Math.pow(chas,2))