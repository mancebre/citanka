import React from 'react';
import StoryLine from '../storyLine/storyLine';

interface Props {
	text: String;
}

const Story = ({ text }: Props) => {
	const breakeLines = (storyBody: String): String[] => {
		const bodyArr = storyBody.split(/\n/);
		return bodyArr;
	};

	const textArr = breakeLines(text);

	// console.log('RENDER - Story');

	return (
		<div>
			{textArr.map((line, row) => (
				<StoryLine line={line} key={row} />
			))}
		</div>
	);
};

export default Story;
