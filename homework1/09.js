// Расчёт кросс-курсов валют

currency1 = {name: "Гонконгівський долар", rate: 3.132597} // название и курс относительно гривны 1й валюты
currency2 = {name: "Індійська рупія", rate: 0.3457227} // название и курс относительно гривны 2й валюты
console.log(currency1.name + " дорівнює " + currency1.rate + " грн.") // вывод курса гривны относительно 1й валюты
console.log(currency2.name + " дорівнює " + currency2.rate + " грн.") // вывод курса гривны относительно 2й валюты
cross1 = parseFloat((currency1.rate / currency2.rate).toFixed(5)) // курс 1й относительно 2й
cross2 = parseFloat((currency2.rate / currency1.rate).toFixed(5)) // курс 2й относительно 1й

console.log("Курс валюти " + "'" + currency1.name + "'" + " до валюти " + "'" + currency2.name + "'" + " дорівнює "+ cross1)
console.log("Курс валюти " + "'" + currency2.name + "'" + " до валюти " + "'" + currency1.name + "'" + " дорівнює "+ cross2)