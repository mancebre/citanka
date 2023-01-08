import React from 'react';
import ProcessText from '../processText/processText';
import './story.css';

type StoryType = {
	title: String;
	body: String;
};

interface Props {
	story: StoryType;
	clicked: React.MouseEventHandler<HTMLButtonElement>;
}

const Story = ({ story, clicked }: Props) => {
	// console.log('RENDER - Story');

	return (
		<>
			<h1>
				<ProcessText text={story.title} />
			</h1>
			<ProcessText text={story.body} />
			<button className='Button' onClick={clicked}>
				СЛЕДЕЋА ПРИЧА
			</button>
		</>
	);
};

export default Story;
