// 运行超时？？？
function GetLeastNumbers_Solution(input, k)
{
  if(!input || !k){
    return [];
  }
  if(input.length === 0 || k>input.length || k<=0){
      return [];
  }
  if(input.length === 1){
      return input;
  }
  var low = 0, high = input.length - 1;
  var index = Partition(input, low, high);
  while(index != k){
    if(index > k){
      index = Partition(input, low, index - 1);
    }else{
      index = Partition(input, index + 1, high);
    }
  }
  var output = input.slice(0, index);
  return output;
}
function Partition(input, low, high){
  if(low < high){
    var x = input[low];
    while(low<high){
      while(low<high && input[high]>x){
        high--;
      }
      if(low<high){
        input[low++] = input[high];
      }
      while(low<high && input[low]<x){
        low++;
      }
      if(low<high){
        input[high--] = input[low];
      }
    }
    input[low] = x;
    return low;
  }
  return 0;
}
GetLeastNumbers_Solution([4], 4);
