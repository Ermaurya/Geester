
public class shorts {
   
static int find_index(int[] arr, int n, int S)
{
	
	// Lower and upper bounds
	int start = 0;
	int end = n - 1;

	// Traverse the search space
	while (start <= end)
	{
		int mid = (start + end) / 2;

		// If S is found
		if (arr[mid] == S)
			return mid;

		else if (arr[mid] < S)
			start = mid + 1;

		else
			end = mid - 1;
	}

	// Return insert position
	return end + 1;
}

// Driver Code
public static void main(String[] args)
{
	int[] arr = {1,3,5,6 };
	int n = arr.length;
	int S = 2;
	
	System.out.println(find_index(arr, n, S));
}
}

