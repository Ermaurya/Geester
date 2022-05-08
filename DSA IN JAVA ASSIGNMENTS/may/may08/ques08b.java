package march;


    class Solution {
        public boolean buddyStrings(String s, String goal) {
            if (s.length() != goal.length()) return false;
    
            if (s.equals(goal)) {
                int[] count = new int[26];
    
                for(int i = 0; i < s.length(); i++) {
                    count[s.charAt(i) - 'a']++;
                }
                
                for (int c : count) {
                    if (c > 1) return true;
                }
                
                return false;
            } else {
                Map<Character, Character> map = new HashMap<>();
                boolean swapped = false;
    
                for (int i = 0; i < s.length(); i++) {
                    char sChar = s.charAt(i);
                    char goalChar = goal.charAt(i);
    
                    if (sChar != goalChar) {
                        if (map.containsKey(sChar)) return false;
    
                        if (map.containsKey(goalChar)) {
                            if (swapped) return false;
    
                            if (map.get(goalChar) == sChar) {
                                swapped = true;
                            }
                        }
    
                        map.put(sChar, goalChar);
                    }
                }
    
                return swapped;
            }
        }
    
    
}
