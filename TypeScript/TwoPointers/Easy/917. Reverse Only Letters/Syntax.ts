function reverseOnlyLetters(s: string): string {
    const chars = s.split("");
    let left = 0;
    let right = chars.length - 1;

    const isLetter = (c: string) => /[a-zA-Z]/.test(c);

    while (left < right) {
        if (!isLetter(chars[left])) {
            left++;
        } else if (!isLetter(chars[right])) {
            right--;
        } else {
            [chars[left], chars[right]] = [chars[right], chars[left]];
            left++;
            right--;
        }
    }

    return chars.join("");
}