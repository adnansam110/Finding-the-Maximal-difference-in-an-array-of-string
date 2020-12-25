var arr = [1,3,5,9,20];
var max=-1;
var s1;
for (var i=0;i<arr.length-1;i++)
{
    s1=Math.abs(arr[i]-arr[i+1]);
    max=Math.max(max,s1);
}
document.write("The maximal difference is ",max);