/*28. Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’]. 
Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.*/
var mas = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'], sum = 0
for (elem of mas) {
    if (String(Number(elem)) !== "NaN") sum += Number(elem)
    else continue
}
console.log(sum)