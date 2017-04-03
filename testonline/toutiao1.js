var line;
while(line=read_line()){
    var n = parseInt(line);
    var arr = read_line().split(' ');
    for(var i=0;i<n;i++){
        arr[i] = parseInt(arr[i]);
    }
    var ret = getIndex(n, arr);
    print(ret.join(' '));
}
function getIndex(n, arr){
    if(n<3){
        return [-1, -1];
    }
    var i=1, left, right, diff, max = 0, ret = [-1, -1];
    while(i<n){
        left = i-1;
        console.log("left:"+left);
        while(i<n && arr[i-1]<arr[i]){
            i++;
        }
        if(i==n){
            console.log("****");
            console.log(max);
            console.log(ret);
            return ret;
        }
        while(i<n && arr[i-1]>arr[i]){
            i++;
        }
        right = i - 1;
        console.log("right:"+right);
        diff = right - left;
        if(max < diff){
            max = diff;
            ret = [left, right];
        }
        console.log(max);
        console.log(left, right);
        return ret;
    }
}
getIndex(17, [1,3,1,2,5,4,3,1,9,10,11,12,13,14,15,16,17]);
