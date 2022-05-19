package assim6;

    class Solution {
        public boolean checkIfPangram(String sen) {
            Set<Character> set = new HashSet<>();
            
            for(char ch : sen.toCharArray()){
                set.add(ch);
                
                if(set.size()==26)
                    return true;
            }
            
            return false;
        }
    }
    

