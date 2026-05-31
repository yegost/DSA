function uniqueMorseRepresentations(words: string[]): number {
    const morse = [
        ".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....",
        "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.",
        "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-",
        "-.--", "--.."
    ];

    const transformations = new Set<string>();

    for (const word of words) {
        let encoded = "";

        for (const ch of word) {
            encoded += morse[ch.charCodeAt(0) - 97];
        }

        transformations.add(encoded);
    }

    return transformations.size;
}