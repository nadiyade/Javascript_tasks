/* 26. Напишите функция, которая принимает аргументом строку 
и возврашает нам строку преобразуя последнюю букву строки в верхний регистр..*/
function stroka() {
    str = prompt('Введите фразу')
    letter = str[str.length-1].toUpperCase()
    str1 = str.replace(str[str.length-1], letter)
    return str1
}
stroka()