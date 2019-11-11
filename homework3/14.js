//14. В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31/12/2025'.
var date = new Date('2025-12-31')
var options = { year: 'numeric', month: 'numeric', day: 'numeric' }
console.log(date.toLocaleDateString('en-GB', options))
var options1 = { year: 'numeric', month: 'long', day: 'numeric' }
console.log(date.toLocaleDateString('en-GB', options1))