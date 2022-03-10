public class onlyeven{

static void Even(int L,int R)
{
// Base case
if (R < L)
{
	return;
}

// Recurrence relation
if(R % 2 == 0 )
	Even(L, R - 2);
else
	Even(L, R + 1);

// Check if R is even
if (R % 2 == 0)
{
	System.out.print(R + " ");
}
}



// Driver Code
public static void main(String[] args)
{
int L = 10,R=50;
System.out.print("Even numbers:");
Even(L, R);
System.out.println();

}
}



