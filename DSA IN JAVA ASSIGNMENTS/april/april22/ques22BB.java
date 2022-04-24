package assim3;
import java.util.LinkedList;

public class ques22BB {
   // class LinkedList{
        Node head;
        class Node
        {
            int data;
            Node next;
            Node(int d)
            {
                data = d;
                next = null;
            }
        }
        public void push(int data) {
            Node newNode = new Node(data);
      
            if(head == null) {
                head = newNode;
                return;
            }
      
            Node lastNode = head;
            while(lastNode.next != null) {
                lastNode = lastNode.next;
            }
      
            lastNode.next = newNode;
        }
        // public void push(int new_data)
        // {
        //     Node new_node = new Node(new_data);
    
    
        //     new_node.next = head;
    
        //     head = new_node;
        // }
    
        public void insertAfter(Node prev_node,int new_data)
        {
    
            if (prev_node == null)
            {
                System.out.println("The given previous node cannot be null");
                return;
            }
    
            Node new_node = new Node(new_data);
    
            new_node.next = prev_node.next;
    
            prev_node.next = new_node;
        }
    
        public void append(int new_data)
        {
            Node new_node = new Node(new_data);
    
            if (head == null)
            {
                head = new Node(new_data);
                return;
            }
    
            new_node.next = null;
    
            Node last = head;
            while (last.next != null)
                last = last.next;
    
            last.next = new_node;
            return;
        }
    
        public void printList()
        {
            Node tnode = head;
            while (tnode != null)
            {
                System.out.print(tnode.data + " ");
                tnode = tnode.next;
            }
        }
    
        public static void main(String[] args)
        {
    
            ques22BB Li = new ques22BB();
    
            Li.append(2);
    
            Li.append(4);
            Li.append(1);
    
            Li.append(3);
            Li.append(8);
            Li.append(5);
            Li.push(20);
    
            System.out.println("Created Linked list is: ");
            Li.printList();
        }
    }



