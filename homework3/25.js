/* 25. Напишите функция, которая принимает аргументом строку 
и возврашает нам строку преобразуя первую букву строки в верхний регистр.*/
function stroka() {
    str = prompt('Введите фразу')
    letter = str[0].toUpperCase()
    str1 = str.replace(str[0], letter)
    return str1
}
stroka()