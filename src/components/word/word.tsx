import React from 'react';
import './word.css';

interface Props {
	word: String;
}
const samoglasnici = [
	'а',
	'е',
	'и',
	'о',
	'и',
	'у',
	'А',
	'Е',
	'И',
	'О',
	'И',
	'У',
];
const suglasnici = [
	'б',
	'в',
	'г',
	'д',
	'ђ',
	'ж',
	'з',
	'ј',
	'к',
	'л',
	'љ',
	'м',
	'н',
	'њ',
	'п',
	'р',
	'с',
	'т',
	'ћ',
	'ф',
	'х',
	'ц',
	'ч',
	'џ',
	'ш',
	'Б',
	'В',
	'Г',
	'Д',
	'Ђ',
	'Ж',
	'З',
	'Ј',
	'К',
	'Л',
	'Љ',
	'М',
	'Н',
	'Њ',
	'П',
	'Р',
	'С',
	'Т',
	'Ћ',
	'Ф',
	'Х',
	'Ц',
	'Ч',
	'Џ',
	'Ш',
];
const znakovi = ['.', ',', ';', ':', '-', '?', '!'];
const r = 'р';

const Word = ({ word }: Props) => {
	const breakeWord = (word: String): String[] => {
		if (word.trim().length < 4) {
			return [word];
		}

		let result: String[] = [];
		let resultKey: number = 0;
		const characters = word.trim().split('');

		// Lomi na R ako je:
		// Na pocetku reci Ispred suglasnika
		if (characters[0] === r && suglasnici.includes(characters[1])) {
			// Dodaj pauzu posle R.
			resultKey++;
			result[resultKey] = '';
		}

		result[resultKey] = '';
		for (const key in characters) {
			result[resultKey] += characters[key];
			if (
				parseInt(key) + 1 === word.trim().length ||
				typeof characters[parseInt(key) + 2] === 'undefined' ||
				znakovi.includes(characters[parseInt(key) + 2])
			) {
				continue;
			}

			//R izmedju dva suglasnika
			if (
				characters[key] === r &&
				suglasnici.includes(characters[parseInt(key) - 1]) &&
				suglasnici.includes(characters[parseInt(key) + 1])
			) {
				// Dodaj pauzu posle R.
				resultKey++;
				result[resultKey] = '';
			}
			if (samoglasnici.includes(characters[key])) {
				resultKey++;
				result[resultKey] = '';
			}
		}
		return result;
	};

	const getClass = (key: number): string => {
		if (key % 2 === 0) {
			return 'Light';
		} else {
			return 'Dark';
		}
	};

	let result: String[];

	// NAJ pravilo
	if (
		word.startsWith('нај') ||
		word.startsWith('Нај') ||
		word.startsWith('НАЈ')
	) {
		const naj: string = word.substring(0, 3);
		const newWord: string = word.substring(3);
		const newWordBroken: String[] = breakeWord(newWord);
		if (Array.isArray(newWordBroken)) {
			result = [naj, ...newWordBroken];
		} else {
			result = [naj, newWord];
		}
	} else {
		result = breakeWord(word);
	}

	// console.log('RENDER - Word');
	return (
		<>
			{result.map((slog, key) => (
				<span className={getClass(key)} key={key}>
					{slog}
				</span>
			))}{' '}
		</>
	);
};

export default Word;
