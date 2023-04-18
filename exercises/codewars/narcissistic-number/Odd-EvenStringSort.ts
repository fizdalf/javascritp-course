export function sortMyString(S: string): string {
    let even = '';
    let odd = '';
    for (let i = 0; i < S.length; i++) {
        if (i % 2 === 0) {
            even += S[i];
        } else {
            odd += S[i];
        }
    }
    return even + ' ' + odd;
}