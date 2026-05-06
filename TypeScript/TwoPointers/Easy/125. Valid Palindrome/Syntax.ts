function isPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    const isAlphaNum = (c: string) => /[a-z0-9]/i.test(c)

    while (left < right) {
        while (left < right && !isAlphaNum(s[left])) left++;
        while (left < right && !isAlphaNum(s[right])) right--;

        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
};