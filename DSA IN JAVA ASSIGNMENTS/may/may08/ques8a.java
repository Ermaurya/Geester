package march;

import java.util.HashMap;

public class ques8a {

  
    private static int equal012(String str) {

        HashMap<String, Integer> map = new HashMap<>();
        map.put("0*0", 1);

        int zc = 0, oc = 0, tc = 0;

        int ans = 0;

        for (int i = 0; i < str.length(); i++) {
            
            if (str.charAt(i) == '0')
                zc++;
            else if (str.charAt(i) == '1')
                oc++;
            else
                tc++;

            String key = (zc - oc) + "*" + (zc - tc);
           
            ans += map.getOrDefault(key, 0);

            map.put(key, map.getOrDefault(key, 0) + 1);
        }
      
        return ans;
    }
    public static void main(String[] args) {
        
        String str = "11100022";
        System.out.println(equal012(str));
    }
}
