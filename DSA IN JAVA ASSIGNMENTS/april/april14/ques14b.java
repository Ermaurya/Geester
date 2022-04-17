package assim2;

public class ques14b {
    static void upper(int matrix[][],
    int row, int col)
{
int i, j;
for (i = 0; i < row; i++)
{
for (j = 0; j < col; j++)
{
if (i > j)
{
  System.out.print("0" + " ");
}
else
System.out.print(matrix[i][j] + " ");
}
System.out.println();
}
}
public static void main(String args[])
{
int matrix[][] = {{1, 2, 3, 4},
                  {5, 6, 7, 8},
                  {9, 8, 7, 6},
                  {9, 8, 7, 6}};
int row = 4, col = 4;
upper(matrix, row, col);
}
}
    

