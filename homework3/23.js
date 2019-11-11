// 23. В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.
var date = new Date('2025-12-31')
var options = { year: 'numeric', month: 'numeric', day: 'numeric' }
var locale = date.toLocaleDateString('en-GB', options)

console.log(String(locale).replace(/[/]/g, '.'))