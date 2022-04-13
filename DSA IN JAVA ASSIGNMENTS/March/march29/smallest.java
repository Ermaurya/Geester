
public class mar01 {
    int findSmallestMissinginSortedArray(int[] arr)
{

if(arr[0] != 0)
return 0;
if(arr[arr.length-1] == arr.length - 1)
return arr.length;

int first = arr[0];

return findFirstMissing(arr,0,
 arr.length-1,first);
}

int findFirstMissing(int[] arr , int start ,
        int end, int first)
{

if (start < end)
{
int mid = (start+end)/2;

if (arr[mid] != mid+first)
return findFirstMissing(arr, start,
               mid , first);
else
return findFirstMissing(arr, mid+1,
               end , first);
}
return start+first;

}

public static void main(String[] args)
{
mar01 small = new mar01();
int arr[] = {0, 1, 2, 3, 4, 5, 6, 7};
int n = arr.length;

System.out.println("First Missing element is : "
+ small.findSmallestMissinginSortedArray(arr));
}
    
}
