function PrintMinNumber(numbers)
{
    if(!numbers || numbers.length === 0){
        return "";
    }
    numbers = numbers.map(function(item){
        return ""+item;
    });
    numbers.sort(function(a, b){
        var str1 = a + b;
        var str2 = b + a;
        return str1 < str2 ? -1 : 1;
    });
    return numbers.join("");
}
PrintMinNumber([21,2,23]);
// console.log([21,2,23].sort());
