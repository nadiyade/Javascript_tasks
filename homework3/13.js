/* 13. Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' 
тремя разными способами (через substr, substring, slice).*/
var str = 'aaa bbb ccc'
str1 = str.substr(4,3)
str2 = str.substring(4,7)
str3 = str.slice(-7,-4)
console.log(str1, str2, str3)
console.log('Разные варианты')
console.log('.substr(4,3) ' + str1)
console.log('.substring(4,7) ' + str2)
console.log('.slice(-7,-4) ' + str3)