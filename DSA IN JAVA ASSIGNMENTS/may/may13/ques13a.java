package assim6;


    class Solution{
    
        Node divide(int N, Node head){
            ArrayList<Integer> odd = new ArrayList<>();
            ArrayList<Integer> even = new ArrayList<>();
            while(head != null){
                if(head.data % 2 == 0){
                    even.add(head.data);
                } else {
                    odd.add(head.data);
                }
                head = head.next;
            }
            Node Result = null, dummy = null;
            for(int i = 0; i < even.size(); i++){
                Node newNode = new Node(even.get(i));
                if(Result == null){
                    Result = newNode;
                    dummy = Result;
                } else {
                    dummy.next = newNode;
                    dummy = dummy.next;
                }
            }
            
            for(int i = 0; i < odd.size(); i++){
                Node newNode = new Node(odd.get(i));
                if(Result == null){
                    Result = newNode;
                    dummy = Result;
                } else {
                    dummy.next = newNode;
                    dummy = dummy.next;
                }
            }
            return Result;
        }
     
    
}
