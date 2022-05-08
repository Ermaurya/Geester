package assim5;

public class ques7a {
    public static void main(String args[])

    {
        int n = 5;
        int[] array = { 10, 3, 5, 6, 2 };

        ques7a ob = new ques7a();
        long[] ans = new long[n];
        ans = ob.pr(array, n);

        for (int i = 0; i < n; i++) {
            System.out.print(ans[i] + " ");
        }
    }

    public static long[] pr(int a[], int n) {
        long prod = 1;
        long flag = 0;

        for (int i = 0; i < n; i++) {

            if (a[i] == 0)
                flag++;
            else
                prod *= a[i];
        }

        long arr[] = new long[n];
        for (int i = 0; i < n; i++) {

            if (flag > 1) {
                arr[i] = 0;
            }

            else if (flag == 0)
                arr[i] = (prod / a[i]);

            else if (flag == 1 && a[i] != 0) {
                arr[i] = 0;
            }

            else
                arr[i] = prod;
        }
        return arr;
    }

}
