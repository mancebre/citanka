export const detectWritingSystem = (text: string): string => {
    const cyrillicRegex = /[\u0400-\u04FF]/; // Cyrillic character range
    const latinRegex = /[A-Za-z]/; // Latin character range

    let isCyrillic = false;
    let isLatin = false;

    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (cyrillicRegex.test(char)) {
            isCyrillic = true;
        } else if (latinRegex.test(char)) {
            isLatin = true;
        }
        if (isCyrillic && isLatin) {
            return 'Cyrillic';
        }
    }

    if (isCyrillic) {
        return 'Cyrillic';
    } else if (isLatin) {
        return 'Latin';
    } else {
        return 'Unknown';
    }
};