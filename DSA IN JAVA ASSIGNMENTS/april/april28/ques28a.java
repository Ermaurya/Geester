package assimnt4;

import java.util.Stack;
public class ques28a {

	public static void main(String[] args) {
		
		int a[] = {0,0,1,1,2,2,3,4,5,5};
		
		Stack<Integer> s = new Stack();
		for(int i =0;i<a.length;i++)
		{
			if(s.isEmpty())
			{
				s.push(a[i]);
			}
			
			else {
				int val = s.peek();
				if(val != a[i])
				{
					s.push(a[i]);
				}
			}
		}
		
		System.out.println(s.toString());
	}

}
    

