var array = [3, 55, -10, 19, -27, 6, -2, 0, 11, -4];
var smallest = array[0];
for(var i=1;i<array.length;i++)
{
    if (smallest>array[i])
    {
        smallest = array[i];
    }
}
console.log(smallest);