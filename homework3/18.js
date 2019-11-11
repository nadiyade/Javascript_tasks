/* 18. Дана строка 'я учу javascript!'. 
Вырежите из нее слово 'учу' и слово 'javascript' 
тремя разными способами (через substr, substring, slice).*/
var str = 'я учу javascript!'
var extract1 = 'учу', extract2 = 'javascript'
var i1 = str.indexOf(extract1), i2 = str.indexOf(extract2) // порядковый индекс первого символа
var l1 = extract1.length, l2 = extract2.length // длина слова, которое вырезается

console.log(str.substr(i1,l1) + ' , ' + str.substr(i2,l2) + ' - извлечено методом .substr')
console.log(str.substring(i1,l1+i1) + ' , ' + str.substring(i2,l2+i2) + ' - извлечено методом .substring')
console.log(str.slice(i1,l1+i1) + ' , ' + str.slice(i2,l2+i2) + ' - извлечено методом .slice')