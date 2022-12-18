import React from 'react';
import './randomStory.css';
import {
	careveUsi,
	kisa,
	drvoIcvet,
	gavranKukavicaIsova,
	kit,
	malaSirena,
	najlepsaSlika,
	snezana,
	triPraseta,
	vevericaIpcela,
	zlatokosaItriMedveda,
} from '../../data/stories';
import Story from '../story/story';

type StoryType = {
	title: String;
	body: String;
};

const RandomStory = () => {
	const avaiableStories: StoryType[] = [
		careveUsi,
		kisa,
		drvoIcvet,
		gavranKukavicaIsova,
		kit,
		malaSirena,
		najlepsaSlika,
		snezana,
		triPraseta,
		vevericaIpcela,
		zlatokosaItriMedveda,
	];

	const selectedStory: StoryType =
		avaiableStories[Math.floor(Math.random() * avaiableStories.length)];

	// console.log('RENDER - RandomStory');

	return (
		<div className='Story'>
			<h1>
				<Story text={selectedStory.title} />
			</h1>
			<Story text={selectedStory.body} />
		</div>
	);
};

export default RandomStory;
