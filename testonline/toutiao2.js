var line, n, m;
var para = [];
var query = [];
while(line = read_line()){
    n = parseInt(line.split(' ')[0]);
    m = parseInt(line.split(' ')[1]);
    var i = n;
    while(i>0){
        line = read_line();
        para.push(line.split(' '));
        i--;
    }
    i = m;
    while(i>0){
        line = read_line();
        query.push(line.split(' '));
        i--;
    }
    var ret = getQuery(n, m, para, query);
    for(i=0;i<q;i++){
        print(ret[i].join(' '));
    }
}
function getQuery(n, m, para, query){
    var minNum = 0, count = 0, ret = [];
    for(var i=0;i<m;i++){
        var q = query[i];
        var maxCount = 0;
        var maxIndex = -1;
        for(var j=0;j<n;j++){
            var p = para[j];
            var num = getSameNum(q, p);
            if(maxCount < num){
                maxCount = num;
                maxIndex = j;
            }
        }
        ret.push(para[maxIndex]);
    }
    return ret;
}
function getSameNum(q, p){
    var count = 0;
    for(var i=0,len1=q.length;i<len1;i++){
        var cur = q[i].toLowerCase();
        var temp = [];
        for(var j=0;j<p.length;j++){
            temp[j] = p[j].toLowerCase();
        }
        if(temp.indexOf(cur) !== -1){
            count++;
        }
    }
    return count;
}
