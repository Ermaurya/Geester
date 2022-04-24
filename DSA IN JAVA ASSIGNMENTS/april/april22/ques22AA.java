package assim3;

import java.util.LinkedList;

public class ques22AA {
        public static void main(String[] args) {

            LinkedList<Integer> li = new LinkedList<>();

            li.add(2);
            li.add(4);
            li.add(1);
            li.add(3);
            li.add(8);
            li.add(5);

            int element = 3;

            int ans = -1;

            for (int i = 0; i < li.size(); i++) {

                int Element = li.get(i);

                if (Element == element) {

                    ans = i;
                    break;
                }
               

            }
            if (ans == -1) {
                System.out.println("not found");
            } else {
                System.out.println("Element found at " + ans+ " index");
            }
        }
       
    }

