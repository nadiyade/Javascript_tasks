/*Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце.
Спрашиваем у пользователя через prompt число.
Если пользователь ввёл 10h, то мы выводим ему количество секунд за 10 часов.
Если пользователь ввёл 10d, то мы выводим ему количество секунд за 10 дней.
Если пользователь ввёл 10w, то мы выводим ему количество секунд за 10 недел.
Если пользователь ввёл 10m, то мы выводим ему количество секунд за 10 месяц.*/
var todaysDate = new Date()
var total_seconds = todaysDate.getSeconds() + todaysDate.getMinutes()*60 + todaysDate.getHours()*3600
console.log("It has passed " + total_seconds + " seconds since the today's day beginning.")

var calc = prompt("Введите число по шаблону: h - часы, d - дни, w - недели, m - месяцы", "10h")
var period = calc.slice(calc.length-1)
var periods = Number(calc.slice(0,calc.length-1))
if (period == "h") alert("В " + periods + " часах (часе) " + periods*3600 + " секунд.")
else if (period == "d") alert("В " + periods + " днях (дне) " + periods*86400 + " секунд.")
else if (period == "w") alert("В " + periods + " неделях (неделе) " + periods*86400*7 + " секунд.")
else if (period == "m") alert("В " + periods + " месяцах (месяце) " + periods*86400*30.5 + " секунд.")
else console.error("Период введён неправильно.")