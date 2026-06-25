function commonChars(words: string[]): string[] {
    const common = new Array(26).fill(0);

    for (const ch of words[0]) {
        common[ch.charCodeAt(0) - 97]++;
    }

    for (let i = 1; i < words.length; i++) {
        const freq = new Array(26).fill(0);

        for (const ch of words[i]) {
            freq[ch.charCodeAt(0) - 97]++;
        }

        for (let j = 0; j < 26; j++) {
            common[j] = Math.min(common[j], freq[j]);
        }
    }

    const result: string[] = [];
    for (let i = 0; i < 26; i++) {
        while (common[i] > 0) {
            result.push(String.fromCharCode(i + 97));
            common[i]--;
        }
    }

    return result;
}