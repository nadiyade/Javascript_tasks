//20. Дана строка 'Я-учу-javascript!'. Замените все дефисы на '!' с помощью глобального поиска и замены.
var str = 'Я-учу-javascript!'
var zamena = str.replace(/-/g, '!')
console.log(zamena)