/*30. Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
 a. Добавьте в начало массива значение ‘Backbone.js’
 b. Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
 c. Добавьте в массив значение ‘CommonJS’ вторым элементом
 d. Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее”
 z.  Сделайте массив и назовите dlyaLyudshix, перебирает массив, где только удалили ‘jQuery’, 
 и перебирайте этот массив и если вы найдёте там значние ‘Vue.js’, то положите в массив с названием dlyaLyudshix*/
 var arr = ['AngularJS', 'jQuery']
 arr.unshift('Backbone.js')
 arr.push('ReactJS', 'Vue.js')
 arr.splice(1, 0, 'CommonJS')
 console.log(arr)
 for (elem of arr) {
     if (elem == 'jQuery') {
     alert('Это здесь лишнее - ' + elem)
     arr.splice(arr.indexOf(elem), 1)
     }
     else console.log(elem)
 }
 console.log(arr)
 var dlyaLyudshix = []
 for (elem of arr) elem == 'Vue.js' ? dlyaLyudshix.push(elem) : {}
 console.log(dlyaLyudshix)