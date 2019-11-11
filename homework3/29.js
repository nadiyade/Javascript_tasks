/*29. Сгенерируйте массив из n случайных чисел с двумя знаками после запятой. 
Переберите массив и распечатайте в консоли значения его элементов,
 возведенные в пятую степень, не используя функцию Math.pow().*/
 var n = 10, mas = [], i = 0
 while (i < n) {
 mas[i] = Number(Math.random().toFixed(2))
 i++
 }
 console.log(mas)
 for (elem of mas) {
 elem = Number((elem**5).toFixed(7))
 console.log(elem)
 }