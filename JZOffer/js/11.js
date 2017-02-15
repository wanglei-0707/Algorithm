/**
 * 要考虑多种情况，指数为0，为1，为负的情况，底数为0且指数为负的情况，
 *
 */
function Power(base, exponent){
    if(exponent === 0){
        console.log(1);
        return 1;
    }else if(exponent === 1){
        console.log(base);
        return base;
    }
    if(equal(base, 0) && exponent < 0){
        console.log(0);
        return 0;
    }
    var result = powerWithPos(base, Math.abs(exponent));
    if(exponent < 0){
        result = 1 / result;
    }
    console.log(result);
    return result;
}

function powerWithPos(base, posExponent){
    if(posExponent === 0){
        return 1;
    }else if(posExponent === 1){
        return base;
    }
    var result = powerWithPos(base, posExponent >> 1);
    result *= result;
    if(posExponent & 1){
        result *= base;
    }
    return result;
}

function equal(num1, num2){
    return num1 - num2 <= 0.0000001 && num2 - num1 <= 0.0000001 ? true : false;
}
power(0, -2);
