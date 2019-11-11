// Дан массив с элементами [2, 3, 4, 5]. С помощью цикла for найдите произведение элементов этого массива. Через for of
var massiv = [2, 3, 4, 5], product = 1, i = 0
for (elem of massiv) {
    product = product * Number(massiv[i])
    i++
    }
console.log(product)