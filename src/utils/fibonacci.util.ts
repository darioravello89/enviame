
export function getFibonaccisSerie() {
    const numeros=[0,1];
    let divisiors = 0;
    let fibonacciNumber=0;
    let index = 2;
    const stop = false;

    while ( divisiors < 1001 ) {
        fibonacciNumber = numeros[index - 2] + numeros[index - 1];
        numeros.push( fibonacciNumber );
        divisiors = getDivisorsCount(fibonacciNumber);
        index++
    }

    return numeros.slice(1);
};

function getDivisorsCount(n: any){

    let numDivisors = 1;
    let factor = 2; 
 
    while (factor * factor <= n) {
        if (n % factor === 0) {
            let exponent = 0;
            do {
                n /= factor;
                exponent++;
            } while (n % factor === 0) 
            numDivisors *= exponent + 1;
        }
        factor = factor === 2 ? 3 : factor + 2
    }
 
    if (n > 1) {
        numDivisors *= 2;
    }

    return numDivisors;
}