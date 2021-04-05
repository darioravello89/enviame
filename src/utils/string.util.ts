export function reverseString(str: string) {
    // Step 1. Use the split() method to return a new array
    const splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    const reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    const joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    // Step 4. Return the reversed string
    return joinArray; // "olleh"
}

export function subCompare(needle: string, haystack: string, minSubstringLength: number) {

    // Min substring length is optional, if not given or is 0 default to 1:
    minSubstringLength = minSubstringLength || 1;

    const palindromes = [];
    // Search possible substrings from largest to smallest:
    for (let i=needle.length; i>=minSubstringLength; i--) {
        for (let j=0; j <= (needle.length - i); j++) {
            const substring = needle.substr(j,i);
            const k = haystack.indexOf(substring);
            if (k !== -1) {
                palindromes.push(substring);
            }
        }
    }
     return {
                found : palindromes.length,
                palindromes
            };
}
