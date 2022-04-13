
class Solution {
    public boolean isAnagram(String s, String t) {
        int[] letters = new int[128];
        
        for (char c : s.toCharArray()) {
            int ascii = (int) c;
            letters[ascii]++;
        }
        for (char c : t.toCharArray()) {
            int ascii = (int) c;
            letters[ascii]--;
        }
        for (int i = 0; i < letters.length; i++) {
            if (letters[i] != 0) {
                return false;
            }
        }
        return true;
    }
}
