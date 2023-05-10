let fibo = 0;

for (i = 1; i < 20; i) {
    fibo = fibo + i;
    i = fibo - i;
    console.log(fibo)
}