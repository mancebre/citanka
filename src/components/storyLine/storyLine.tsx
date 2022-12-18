import React from 'react';
import './storyLine.css';
import Word from '../word/word';

interface Props {
	line: String;
}

const StoryLine = ({ line }: Props) => {
	const wordsArr = line.trim().split(' ');
	// console.log(wordsArr);

	// console.log('RENDER - StoryLine');
	return (
		<p>
			{wordsArr.map((word, key) => (
				<Word key={key} word={word} />
			))}
		</p>
	);
};

export default StoryLine;
