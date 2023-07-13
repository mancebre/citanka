import React from 'react';
import './Word.css';

interface Props {
  word: string;
  'data-testid'?: string;
}

const samoglasnici = ['а', 'е', 'и', 'о', 'и', 'у', 'А', 'Е', 'И', 'О', 'И', 'У'];
const suglasnici = ['б', 'в', 'г', 'д', 'ђ', 'ж', 'з', 'ј', 'к', 'л', 'љ', 'м', 'н', 'њ', 'п', 'р', 'с', 'т', 'ћ', 'ф', 'х', 'ц', 'ч', 'џ', 'ш', 'Б', 'В', 'Г', 'Д', 'Ђ', 'Ж', 'З', 'Ј', 'К', 'Л', 'Љ', 'М', 'Н', 'Њ', 'П', 'Р', 'С', 'Т', 'Ћ', 'Ф', 'Х', 'Ц', 'Ч', 'Џ', 'Ш'];
const znakovi = ['.', ',', ';', ':', '-', '?', '!'];
const r = 'р';

const Word = ({ word, 'data-testid': testId }: Props) => { 
  const breakeWord = (word: string): string[] => {
    if (word.trim().length < 4) {
      return [word];
    }

    let result: string[] = [];
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
	for (const character of characters) {
		result[resultKey] += character;
		const key = characters.indexOf(character);
		if (
		  key + 1 === word.trim().length ||
		  key + 2 >= word.trim().length ||
		  znakovi.includes(characters[key + 2])
		) {
		  continue;
		}
	
		// R izmedju dva suglasnika
		if (
		  character === r &&
		  suglasnici.includes(characters[key - 1]) &&
		  suglasnici.includes(characters[key + 1])
		) {
		  // Dodaj pauzu posle R.
		  resultKey++;
		  result[resultKey] = '';
		}
		if (samoglasnici.includes(character)) {
		  resultKey++;
		  result[resultKey] = '';
		}
	  }
    return result;
  };

  const getClass = (key: number): string => {
    return key % 2 === 0 ? 'Light' : 'Dark';
  };

  let result: string[];

  // NAJ pravilo
  if (word.startsWith('нај') || word.startsWith('Нај') || word.startsWith('НАЈ')) {
	const naj: string = word.substring(0, 3);
	const newWord: string = word.substring(3);
	const newWordBroken = breakeWord(newWord);
	result = [naj, ...newWordBroken];
  } else {
	result = breakeWord(word);
  }

//   console.log('RENDER - Word');
  return (
    <>
      {result.map((slog, key) => (
        <span className={getClass(key)} key={key} data-testid={testId}>
          {slog}
        </span>
      ))}{' '}
    </>
  );
};

export default Word;
