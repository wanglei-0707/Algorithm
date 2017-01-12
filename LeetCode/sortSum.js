//升序
var origin = [2,5,1,4,76,34,15,27];
var origin1 =[1,2,3,4,5,6,7,8,9];
/*冒泡排序:每一趟冒泡比较两个数大小，pre大于next则交换，每次都把最大的放在最后
最佳情况：正序 T(n) = O(n)
最差情况：反序 T(n) = O(n^2)
平均情况：T(n) = O(n^2)
*/
function bubbleSort(arr){
    var len = arr.length;
    var temp, flag;
    for(var i=0;i<len;i++){
        flag = false;
        for(var j=1;j<len-i;j++){
            if(arr[j-1] > arr[j]){
                temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp;
                flag = true;
            }
        }
        if(!flag){
            break;
        }
    }
    return arr;
}
/*改进冒泡：设置一标志性变量pos,用于记录每趟排序中最后一次进行交换的位置。
由于pos位置之后的记录均已交换到位,故在进行下一趟排序时只要扫描到pos位置即可。*/
function bubbleSort2(arr) {
    var i = arr.length-1;  //初始时,最后位置保持不变
    while ( i> 0) {
        var pos= 0; //每趟开始时,无记录交换
        for (var j= 0; j< i; j++)
            if (arr[j]> arr[j+1]) {
                pos = j; //记录交换的位置
                var tmp = arr[j]; arr[j]=arr[j+1];arr[j+1]=tmp;
            }
        i= pos; //为下一趟排序作准备
     }
     return arr;
}
/*传统冒泡排序中每一趟排序操作只能找到一个最大值或最小值,
我们考虑利用在每趟排序中进行正向和反向两遍冒泡的方法一次可以得到两个最终值(最大者和最小者) ,
从而使排序趟数几乎减少了一半。*/
function bubbleSort3(arr3) {
    var low = 0;
    var high= arr.length-1; //设置变量的初始值
    var tmp,j;
    while (low < high) {
        for (j= low; j< high; ++j) //正向冒泡,找到最大者
            if (arr[j]> arr[j+1]) {
                tmp = arr[j]; arr[j]=arr[j+1];arr[j+1]=tmp;
            }
        --high;                 //修改high值, 前移一位
        for (j=high; j>low; --j) //反向冒泡,找到最小者
            if (arr[j]<arr[j-1]) {
                tmp = arr[j]; arr[j]=arr[j-1];arr[j-1]=tmp;
            }
        ++low;                  //修改low值,后移一位
    }
    return arr3;
}


/*选择排序：每一次从待排序的数据元素中选择最小的放在序列起始位置
算法分析：
最佳情况：T(n) = O(n^2)
最差情况：T(n) = O(n^2)
平均情况：T(n) = O(n^2)
*/
function selectionSort(arr){
    var len = arr.length;
    var min, index, temp;
    for(var i=0;i<len-1;i++){
        min = arr[i];
        index = i;
        for(var j=i+1;j<len;j++){
            if(min > arr[j]){
                min = arr[j];
                index = j;
            }
        }
        temp = arr[index];
        arr[index] = arr[i];
        arr[i] = temp;
    }
    return arr;
}


/*插入排序:
工作原理是通过构造有序序列，对于未排序数据，在已排好序的序列中从后向前扫描，找到相应位置并插入
通常采用in-place排序，即只需要O(1)的额外空间的排序，因而在从后向前扫描过程中，需要反复把已排序元素逐步向后挪威，为最新元素提供插入空间
1）从第一个元素开始，该元素可以认为已经排好序；
2）取出下一个元素，在已经排序的元素序列中从后向前扫描；
3）如果该元素（已排序）大于新元素，将该元素移到下一个位置；
4）重复步骤3，知道找到已排序的元素小于或等于新元素的位置；
5）将新元素插入到该位置；
6）重复步骤2~5；
最佳情况：正序  T(n) = O(n)
最坏情况：反序  T(n) = O(n^2)
平均情况：T(n) = O(n^2)
*/
function insertSort(arr){
    for(var i=1;i<arr.length;i++){
        var temp = arr[i];
        var j = i-1;
        while(j>=0 && arr[j]>temp){
            arr[j+1] = arr[j];
            j--;
        }
        arr[j+1] = temp;
    }
    return arr;
}
//改进插入排序：查找插入位置时使用二分查找的方法
function binaryInsertSort(arr){
    for(var i=1;i<arr.length;i++){
        var temp = arr[i], left = 0, right = i-1;
        while(left<=right){
            var middle = parseInt(left+right)/2;
            if(temp < arr[middle]){
                right = middle - 1;
            }else{
                left = middle + 1;
            }
        }
        for(var j=i-1;j>=left;j--){
            arr[j+1] = arr[j];
        }
        arr[left] = temp;
    }
    return arr;
}


/*
希尔排序：
先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序，具体算法描述：
<1>. 选择一个增量序列t1，t2，…，tk，其中ti>tj，tk=1；
<2>.按增量序列个数k，对序列进行k 趟排序；
<3>.每趟排序，根据对应的增量ti，将待排序列分割成若干长度为m 的子序列，
分别对各子表进行直接插入排序。仅增量因子为1 时，整个序列作为一个表来处理，表长度即为整个序列的长度。
最佳情况：T(n) = O(nlog2 n)
最坏情况：T(n) = O(nlog2 n)
平均情况：T(n) =O(nlog n)
*/
function shellSort(arr){
    var len = arr.length;
    var temp;
    var gap = 1;
    while(gap < len/5){  //动态定义间隔序列
        gap = gap *  5 + 1;
    }
    for(gap;gap>0;gap=Math.floor(gap/5)){
        for(var i=gap;i<len;i++){
            temp = arr[i];
            for(var j=i-gap;j>=0 && arr[j]>temp;j-=gap){
                arr[j+gap] = arr[j];
            }
            arr[j+gap] = temp;
        }
    }
    return arr;
}

/*
归并排序
和选择排序一样，归并排序的性能不受输入数据的影响，但表现比选择排序好的多，
因为始终都是O(n log n）的时间复杂度。代价是需要额外的内存空间。
将已有序的子序列合并，得到完全有序的序列；即先使每个子序列有序，
再使子序列段间有序。若将两个有序表合并成一个有序表，称为2-路归并。
<1>.把长度为n的输入序列分成两个长度为n/2的子序列；
<2>.对这两个子序列分别采用归并排序；
<3>.将两个排序好的子序列合并成一个最终的排序序列。
最佳情况：T(n) = O(n)
最差情况：T(n) = O(nlogn)
平均情况：T(n) = O(nlogn)
*/

//递归
function mergeSort(arr){
    var len = arr.length;
    if(len<2){
        return arr;
    }
    var middle = Math.floor(len/2);
    var left = arr.slice(0,middle);
    var right = arr.slice(middle);
    return merge(mergeSort(left),mergeSort(right));
}
//迭代
function mergeSort(arr){
    var len = arr.length;
    if(len<2){
        return arr;
    }
    var work = [];
    for(var i=0;i<len;i++){
        work[i] = arr[i];
    }
    work.push([]);
    for(var lim=len;lim>1;lim=(lim+1)/2){
        for(var j=0,k=0;k<lim;j++,k+=2){
            work[j] = merge(work[k], work[k+1]);
        }
        work[l] = [];
    }
    return work[0];
}
function merge(left,right){
    var ret = [];
    while(left.length && right.length){
        if(left[0] < right[0]){
            ret.push(left.shift());
        }else{
            ret.push(right.shift());
        }
    }
    while(left.length){
        ret.push(left.shift());
    }
    while(right.length){
        ret.push(right.shift());
    }
    // ret.concat(left).concat(right);
    return ret;
}

/*
快速排序：
快排使用分治法来把一个串分为两个子串，
<1>.从数列中挑出一个元素，称为 “基准”（pivot）；
<2>.重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；
<3>.递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序。
最佳情况：T(n) = O(nlogn)
最差情况：T(n) = O(n2)
平均情况：T(n) = O(nlogn)
*/
//常规快排方法
function quickSort1(arr,left,right){
    if(left<right){
        var x = arr[left];
        var low = left, high = right;
        while(low<high){
            while(low<high && arr[high]>=x){
                high--;
            }
            if(low<high){
                arr[low] = arr[high];
                low++;
            }
            while(low<high && arr[low]<=x){
                low++;
            }
            if(low<high){
                arr[high] = arr[low];
                high--;
            }
        }
        arr[low] = x;
        quickSort1(arr,left,low-1);
        quickSort1(arr,low+1,right);
    }
    console.log(arr);
    return arr;
}
//另一种快排写法
function quickSort2(arr,left,right){
    if(left<right){
        var x = arr[right];  //x为基准
        var i = left - 1, temp;
        for(var j=left;j<=right;j++){
            if(arr[j]<=x){
                i++;
                if(i!==j){
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        quickSort2(arr,left,i-1);
        quickSort2(arr,i+1,right);
    }
}
function quickSort3(arr){
    if(arr.length<2){
        return arr;
    }
    var pivotIndex = Math.floor(arr.length/2);
    var pivot = arr.splice(pivotIndex,1)[0];
    var left = [];
    var right = [];
    for(var i=0;i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return quickSort3(left).concat([pivot],quickSort3(right));
}

/*
堆排序
<1>.将初始待排序关键字序列(R1,R2….Rn)构建成大顶堆，此堆为初始的无序区；
<2>.将堆顶元素R[1]与最后一个元素R[n]交换，此时得到新的无序区(R1,R2,……Rn-1)和新的有序区(Rn),
且满足R[1,2…n-1]<=R[n]；
<3>.由于交换后新的堆顶R[1]可能违反堆的性质，因此需要对当前无序区(R1,R2,……Rn-1)调整为新堆，
然后再次将R[1]与无序区最后一个元素交换，得到新的无序区(R1,R2….Rn-2)和新的有序区(Rn-1,Rn)。
不断重复此过程直到有序区的元素个数为n-1，则整个排序过程完成。
最佳情况：T(n) = O(nlogn)
最差情况：T(n) = O(nlogn)
平均情况：T(n) = O(nlogn)
*/
function heapSort(arr){
    var heapSize = arr.length, temp;
    for(var i=Math.floor(heapSize/2)-1;i>=0;i--){ //从堆的倒数第二行的最后一个节点开始调整
        heapify(arr,i,heapSize);
    }
    for(var j=heapSize-1;j>=1;j--){
        temp = arr[0];
        arr[0] = arr[j];
        arr[j] = temp;
        heapify(arr,0,--heapSize);
    }
    return arr;
}
function heapify(arr,x,len){
    var l=2*x+1, r=2*x+2,largest=x,temp;
    if(l<len&&arr[l]>arr[largest]){
        largest = l;
    }
    if(r<len&&arr[r]>arr[largest]){
        largest = r;
    }
    if(largest!=x){
        temp = arr[x];
        arr[x] = arr[largest];
        arr[largest] = temp;
        heapify(arr,largest,len);
    }
}

/*
计数排序
计数排序(Counting sort)是一种稳定的排序算法。计数排序使用一个额外的数组C，
其中第i个元素是待排序数组A中值等于i的元素的个数。
然后根据数组C来将A中的元素排到正确的位置。它只能对整数进行排序。
<1>. 找出待排序的数组中最大和最小的元素；
<2>. 统计数组中每个值为i的元素出现的次数，存入数组C的第i项；
<3>. 对所有的计数累加（从C中的第一个元素开始，每一项和前一项相加）；
<4>. 反向填充目标数组：将每个元素i放在新数组的第C(i)项，每放一个元素就将C(i)减去1。
当输入的元素是n 个0到k之间的整数时，它的运行时间是 O(n + k)。计数排序不是比较排序，排序的速度快于任何比较排序算法。
由于用来计数的数组C的长度取决于待排序数组中数据的范围（等于待排序数组的最大值与最小值的差加上1），
这使得计数排序对于数据范围很大的数组，需要大量时间和内存。
最佳情况：T(n) = O(n+k)
最差情况：T(n) = O(n+k)
平均情况：T(n) = O(n+k)
*/
function countingSort(arr){
    var len = arr.length;
    b = [];  //存放最终排好序的序列
    c = [];  //存放每个元素出现的次数
    min = max = arr[0];
    for(var i=0;i<len;i++){
        min = min <= arr[i] ? min : arr[i];
        max = max >= arr[i] ? max : arr[i];
        c[arr[i]] = c[arr[i]] ? c[arr[i]]+1 : 1;
    }
    for(var j=min;j<max;j++){
        c[j+1] = (c[j+1] || 0) + (c[j] || 0);
    }
    for(var k=len-1;k>=0;k--){
        b[--c[arr[k]]] = arr[k];
    }
    return b;
}
var arr = [2,2,3,8,7,1,2,2,2,7,3,9,8,2,1,4,2,4,6,9,2];
countingSort(arr);

/*
桶排序
假设输入数据服从均匀分布，将数据分到有限数量的桶里，
每个桶再分别排序（有可能再使用别的排序算法或是以递归方式继续使用桶排序进行排序）
<1>.设置一个定量的数组当作空桶；
<2>.遍历输入数据，并且把数据一个一个放到对应的桶里去；
<3>.对每个不是空的桶进行排序；
<4>.从不是空的桶里把排好序的数据拼接起来。
桶排序最好情况下使用线性时间O(n)，桶排序的时间复杂度，取决与对各个桶之间数据进行排序的时间复杂度，
因为其它部分的时间复杂度都为O(n)。很显然，桶划分的越小，各个桶之间的数据越少，排序所用的时间也会越少。
但相应的空间消耗就会增大。
最佳情况：T(n) = O(n+k)
最差情况：T(n) = O(n+k)
平均情况：T(n) = O(n2)
*/
function bucketSort(arr,num){
    var len = arr.length;
    if(len <= 1){
        return arr;
    }
    var buckets = [], result = [];
    var min = arr[0],max = arr[0], regex = '/^[1-9]+[0-9]*$/', space, n = 0;
    num = num || ((num > 1 && regex.test(num)) ? num : 10);
    for(var i=1;i<len;i++){
        min = min < arr[i] ? min : arr[i];
        max = max > arr[i] ? max : arr[i];
    }
    space = (max - min + 1) / num;  //根据范围确定每个桶的空间
    for(var j=0;j<len;j++){
        var index = Math.floor((arr[j] - min) / space);
        if(buckets[index]){
            var k = buckets[index].length - 1;
            while(k>=0 && buckets[index][k]>arr[j]){
                buckets[index][k+1] = buckets[index][k];
                k--;
            }
            buckets[index][k+1] = arr[j];
        }else{
            buckets[index] = [];
            buckets[index].push(arr[j]);
        }
    }
    while(n<num){
        result = result.concat(buckets[n]); //将各个桶拼接起来
        n++;
    }
    return result;
}

/*
基数排序
基数排序也是非比较的排序算法，对每一位进行排序，从最低位开始排序，
复杂度为O(kn),n为数组长度，k为数组中的数的最大的位数；
<1>.取得数组中的最大数，并取得位数；
<2>.arr为原始数组，从最低位开始取每个位组成radix数组；
<3>.对radix进行计数排序（利用计数排序适用于小范围数的特点）；
最佳情况：T(n) = O(n * k)
最差情况：T(n) = O(n * k)
平均情况：T(n) = O(n * k)
*/
function radixSort(arr, maxDigit){
    var mod = 10;
    var dev = 1;
    var counter = [];
    for(var i=0;i<maxDigit;i++,dev*=10,mod*=10){
        for(var j=0;j<arr.length;j++){
            var bucket = parseInt((arr[j] % mod) / dev);
            if(counter[bucket] === null){
                counter[bucket] = [];
            }
            counter[bucket].push(arr[j]);
        }
        var pos = 0;
        for(j=0;j<counter.length;j++){
            var value = null;
            if(counter[j] !== null){
                while((value = counter[j].shift()) !== null){
                    arr[pos++] = value;
                }
            }
        }
    }
    return arr;
}

/*基数排序 vs 计数排序 vs 桶排序

这三种排序算法都利用了桶的概念，但对桶的使用方法上有明显差异：

基数排序：根据键值的每位数字来分配桶
计数排序：每个桶只存储单一键值
桶排序：每个桶存储一定范围的数值*/
