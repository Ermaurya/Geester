package assim5;

public class ques6bb {
    
    public static void main(String[] args) {
        Roatatchar("amazon", "azonam");
        Roatatchar("quality", "quality");

    }

    public static void Roatatchar(String word, String rotationchar) {

        String rotat = "";
        int roation = 2;
        for (int i = roation; i < word.length(); i++) {
            rotat = rotat + word.charAt(i);
        }

        for (int i = 0; i < roation; i++) {
            rotat = rotat + word.charAt(i);
        }
        System.out.println(rotat);

        if (rotat.equals(rotationchar)) {
            System.out.println("True");
        } else {
            System.out.println("false");
        }
    }
}
