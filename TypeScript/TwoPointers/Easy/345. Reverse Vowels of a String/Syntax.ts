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

/* Normal reverse */

function reverseVowels1(s: string): string {
    const vowels = "aeiouAEIOU"
    let arr = s.split('')

    const vowelList: string[] = []
    for (const char of arr) {
        if (vowels.includes(char)) {
            vowelList.push(char)
        }
    }

    vowelList.reverse();

    let j = 0;
    for (let i = 0; i < arr.length; i++) {
        if (vowels.includes(arr[i])) {
            arr[i] = vowelList[j]
            j++;
        }
    }

    return arr.join('')
};