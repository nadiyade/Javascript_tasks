/* В переменную age запишите возраст человека. 
Если значение больше или равно 20 и меньше 27, 
через console.warn выводится “Выслать повестку”.*/
var age = prompt("Введите возраст", 100)
if (age >= 20 && age < 27) {console.warn("Выслать повестку")}
else {console.log("Повестку не ждите")}