function shortestCompletingWord(licensePlate: string, words: string[]): string {
    const target = new Array(26).fill(0);

    for (const ch of licensePlate.toLowerCase()) {
        if (ch >= "a" && ch <= "z") {
            target[ch.charCodeAt(0) - 97]++;
        }
    }

    let result = "";

    for (const word of words) {
        const count = new Array(26).fill(0);

        for (const ch of word.toLowerCase()) {
            count[ch.charCodeAt(0) - 97]++;
        }

        let valid = true;

        for (let i = 0; i < 26; i++) {
            if (count[i] < target[i]) {
                valid = false;
                break;
            }
        }

        if (valid && (result === "" || word.length < result.length)) {
            result = word;
        }
    }

    return result;
};