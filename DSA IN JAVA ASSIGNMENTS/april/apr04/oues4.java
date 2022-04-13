
import java.util.*;
public class apr03 {
    public static void main(String args[]){
        ArrayList<String> arraylist = new ArrayList<String>();
        arraylist.add("AA");
        arraylist.add("DD");
        arraylist.add("NN");
        arraylist.add("SS");
 
        Collections.sort(arraylist, Collections.reverseOrder());
 
        System.out.println("ArrayList in descending order:");
        for(String str: arraylist){
             System.out.println(str);
         }
     }
    
}
