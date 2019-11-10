//Сформируйте строку вида ".#.#.#.#.#." с помощью цикла for
a = prompt("Какую фразу повторить?")
b = ""
repeat = Number(prompt("Сколько раз повторить?"))
i = 0
while (i < repeat) {b = b+"."+a, i++}
console.log(b+".")