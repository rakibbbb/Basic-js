var arr = [24, 85, 65, 87, 99, 58, 67, 101, 33, 59];

function largestNumber(){
    var largeNum = arr[0];
    for(var i = 0; i < arr.length; i++)
    {
        var element = arr[i];
        if(element > largeNum)
        {
            largeNum = element;
        }
    }
    return largeNum;
}
var result = largestNumber(arr);
console.log("Output", result);