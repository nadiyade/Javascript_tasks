/*Напишите цикл с шагом 1, в теле которого 
распечатываются квадраты каждого четного значения счетчика*/
var counter = 10
for (var i = 0; i <= counter; i++) {
    ostatok = i
    ostatok %= 2
    if (ostatok == 0) {
    console.log(Math.pow(i,2)) }
    else continue
}