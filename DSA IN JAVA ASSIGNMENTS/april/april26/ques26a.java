package assimnt4;

    /**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) 
    {	
        ListNode tempA = headA,tempB = headB;
        while (tempA != null) 
        {
            tempA.val = -tempA.val;
            tempA = tempA.next;
        }
        ListNode inter = null;
        while (tempB != null && inter == null) 
        {
            if (tempB.val < 0)
                inter = tempB;

            tempB = tempB.next;
        }
        tempA = headA;
        while (tempA != null) 
        {
             tempA.val = -tempA.val;
            tempA = tempA.next;
        }
        
        return inter;
    }
}
    
