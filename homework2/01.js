/* 1. Напишите код вычисления суммы всех нечетных чисел от 0 до заданного числа N
- Спрашиваем у пользователя через prompt
- Переводим в number(потому что из prompt мы получаем строку)
- Дальше думаем сами
В конце просто я должен увидеть сумму от 0 до N числа, который я ввёл*/
var n = Number(prompt("Введите любое положительное число")) 
var sum = 0
for (i = 0; i <= n; i++) {
    ostatok = i
    ostatok %= 2
    if (ostatok !=0) sum = sum + i
    else continue
}
console.log("Сумма всех нечётных чисел: " + sum)