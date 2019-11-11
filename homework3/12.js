/* 12. Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' 
с помощью глобального поиска и замены. (посмотрите replace например)*/
var str = 'aaa@bbb@ccc'
str1 = str.replace(/@/g, '!')
console.log(str1)