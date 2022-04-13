
"Find the time complexity of the following algorithms

1.static void fun()
{
    int i, j;
    for (i = 1; i <= n; i++)
        for (j = 1; j <= log(i); j++)                time complexity=O(N)
            System.out.printf(""GeeksforGeeks"");
}

2.
for (i = 0; i < N; i++) {
    a = a + rand();
}                                time complexity=O(N+M)
for (j = 0; j < M; j++) {
    b = b + rand();
}



3.
int a = 0;
for (i = 0; i < N; i++) {
    for (j = N; j > i; j--) {    time complexity=O(N2)
        a = a + i + j;
    }
}


4.
int i, j, k = 0;
for (i = n / 2; i <= n; i++) {
    for (j = 2; j <= n; j = j * 2) { time complexity=O(N2)
        k = k + n / 2;
    }
}

5.
int a = 0, i = N;
while (i > 0) {                    time complexity=O(1)
    a += i;
    i /= 2;
}"
