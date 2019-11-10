/*Создайте переменную str и присвойте ей значение 'Привет, Мир!'.
 Выведите сумму всех charCode этой переменной*/
 var str = 'Привет, Мир!', sum = 0
 for (elem in str) sum += Number(str.charCodeAt(elem))
 console.log(sum)