package assim6;

public class ques12a {
    static void subString (String s){
        for(int i=0;i<s.length();i++){
            String r="";
            for(int j=i;j<s.length();j++){
                 r = r+s.charAt(j);
                 System.out.println(r);
            }
        }
    }
    public static void main(String args[]){
        String s = "abcd";
        subString(s);
    }
    
}
