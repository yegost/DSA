/* Two pointers approach */

function reverseVowels(s: string): string {
    const vowels = "aeiouAEIOU"
    let arr = s.split('')

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (!vowels.includes(arr[left])) {
            left++;
        } else if (!vowels.includes(arr[right])) {
            right--;
        } else {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
    }

    return arr.join('')
};