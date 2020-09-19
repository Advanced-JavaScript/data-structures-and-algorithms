const nFib = n => n<2 ? n: nFib(n-1) + nFib(n-2);

//Another solution

const fib = function(n){
    const mem = [0,1];
    while(n > 1){
        mem.push(mem.shift() + mem[0]);
        n--;
    }
    return mem[n];
}