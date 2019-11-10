/*Создайте переменную str и присвойте ей значение 'abcde'. 
Обращаясь к отдельным символам этой строки, выведите на экран
символ 'a', символ 'b', символ 'e'. 
Перебираем через цикл строку и при переборе строки,
если текушее значение в цикле будет равно 'a', 'b', 'e' - вывести через console 'Я знаю эту букву'*/
var str = "abcde"
console.log(str.slice(0,1))
console.log(str.slice(1,2))
console.log(str.slice(str.length-1))

for (elem of str) {
    if (elem == "a" || elem == "b" || elem == "e") console.log('Я знаю эту букву')
    else console.log(elem)
}