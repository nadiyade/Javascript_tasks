/*34. Используя вложенные циклы, сформируйте двумерный массив, 
содержащий таблицу умножения:  
"1x1=1; 2x1=1"
"1x2=2; 2x2=4"
И выходим и останавливаем цикл, когда будет 6 умножнить на 6*/
var arr = [], str = []
for (i = 0; i < 6; i++) {
    for (j = 1; j <= 2; j++) {
        str[j] = `${j}*${i+1}=${j*(i+1)};`
    }
    s = String(str).slice(1).replace(',',' ')
    arr[i] = s.slice(0,s.length-1)
    console.log(arr[i])
}