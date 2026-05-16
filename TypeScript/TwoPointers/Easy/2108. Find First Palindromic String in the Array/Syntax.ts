/* Brute force */

function firstPalindrome0(words: string[]): string {
    const isPalindrome = (str: string) => {
        let reversed = str.split('').reverse().join('')

        if (str === reversed) return true
        return false;
    }
    
    for (const word of words) {
        if (isPalindrome(word)) return word
    }

    return ""
};

/* Two Pointers */

function firstPalindrome(words: string[]): string {
    for (const word of words) {
        let left = 0
        let right = word.length - 1

        while (left <= right) {
            if (word[left] !== word[right]) break;

            if (left > right) return word
            left++;
            right--;
        }

        if (left > right) return word;
    }

    return ""
};