package assim6;
class Solution {
    public boolean isAnagram(String s, String t) {
        
        boolean flag = true;
        int a[] = new int[26];
        int b[] = new int[26];
        for(int i =0;i<s.length();i++)
        {
            a[s.charAt(i)-'a']++;
        }
        
        
        for(int i =0;i<t.length();i++)
        {
            b[t.charAt(i)-'a']++;
        }
        for(int i=0;i<b.length;i++)
        {
            if(a[i]!=b[i])
            {
                flag = false;
            }
        }
        return flag;
    }
}
