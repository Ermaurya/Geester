package assim6;

public class ques11b {
    static String remove(String s){
        String r = "";
        for(int i=0;i<s.length();i++){
            if(Character.isLetterOrDigit(s.charAt(i))){
                r = r+s.charAt(i);
            }
        }
        return r;
    }
    public static void main(String args[]){
        String s = "afgt%y^u#";
        System.out.println(remove(s));
    }
    
}
