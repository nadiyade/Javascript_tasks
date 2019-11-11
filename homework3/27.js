/* 27. Напишите функция, которая принимает аргументом строку и преобразуйте например 'var_test_text' в 'varTestText'. 
Функция, конечно же, должен работать с любыми аналогичными строками.*/
function stroka() {
    str = prompt('Введите фразу')
    var i = 0, str1 = "", u = false
    for (elem of str) {          
        u == true ? elem = elem.toUpperCase() : {}
        
        if (elem.match(/[a-zа-я]/i)) {
        console.log(elem)
        str1 += elem
        u = false
        }
        else {
            u = true
        }
    i++
    }
    return str1
}
stroka()