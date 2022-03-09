public class smalle {
 
	int findFirstMissing(int array[], int start, int end)
	{
		if (start > end)
			return end + 1;

		if (start != array[start])
			return start;

		int mid = (start + end) / 2;

		
		if (array[mid] == mid)
			return findFirstMissing(array, mid+1, end);

		return findFirstMissing(array, start, mid);
	}

	
	public static void main(String[] args)
	{
		smalle small = new smalle();
		int arr[] = {0, 1, 2, 6, 9, 11, 15};
		int n = arr.length;
		System.out.println("First Missing element is : "
				+ small.findFirstMissing(arr, 0, n - 1));
	}
}


    

