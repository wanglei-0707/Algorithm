function ReverseSentence(str)
{
    return str.split(' ').reverse().join(' ');
}
ReverseSentence('I am a student.');

function LeftRotateString(str, n)
{
    if(!str){
        return '';
    }
    var len = str.length;
    n = n % len;
    return str.slice(n) + str.slice(0, n);
}
LeftRotateString('abcXYZdef', 12);
