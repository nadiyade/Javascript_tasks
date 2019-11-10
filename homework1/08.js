/*Напишите цикл от 1 до 50, в котором будет выводиться поочередно числа от 1 до 50, 
но есть условия:
- если число делится на 3 без остатка, то выводить не это число, а слово «Fizz»;
- если число делится на 5 без остатка, то выводить не это число, а слово «Buzz»;
- если число делится и на 3 и на 5 без остатка, то выводить не это число, а слово «FizzBuzz»*/
for (var i = 1; i < 50; i++){
    var ostatok = i
    if (ostatok %15 == 0) console.log("FizzBuzz")
    else if (ostatok %3 == 0) console.log("Fizz")
    else if (ostatok %5 == 0) console.log("Buzz")
    else console.log(i)
}