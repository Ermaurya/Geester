package assimnt4;


   public class AddFirstElement {
	static DNode head;

	public static void main(String[] args) {
		addFirst(10);
		addlast(29);
		addlast(34);
                addlast(12);
                addlast(50);
                addlast(7);
		System.out.println("Count = " + getCount());
		display();

	}
	public static void addlast(int data) {
		DNode d = new DNode(data);
		if(head == null) {
			head = d;
		}
		else {
			DNode cur = head;
			while(cur.right != null) {
				cur = cur.right;
			}
			cur.right = d;
			d.left = cur;
		}
		
	}
	public static void addFirst(int data) {
		DNode d = new DNode(data);
		if(head == null) {
			head = d;
			return;
		}
		else
		{
			d.right = head;
			head.left = d;
			head = d;
		}
	}
	public static int getCount() {
		int count = 0;
		DNode cur = head;
		while(cur != null) {
			if(cur.data > 25) {
				count++;
			}
			cur = cur.right;
		}
		return count;
		
	}
	public static void display() {
		if(head == null) {
			System.out.println("List is Empty ! ");
			return;
		}
		else {
			DNode cur = head;
			while(cur != null) {
				System.out.print(cur.data + " ");
				cur = cur.right;
			}
			System.out.println();
		}
	}

}
