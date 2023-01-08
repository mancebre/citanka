import React, { useEffect, useState } from 'react';
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
import ProcessText from '../processText/processText';

type StoryType = {
	title: String;
	body: String;
};

const RandomStory = () => {
	const [allRead, setAllRead] = useState(false);
	const [avaiableStories, updateAvaiableStories] = useState<StoryType[]>([
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
	]);
	const [selectedStory, setSelectedStory] = useState<StoryType>({
		title: '',
		body: '',
	});

	const getNextStory = () => {
		if (avaiableStories.length < 1) {
			setAllRead(true);
			return false;
		}
		const story =
			avaiableStories[Math.floor(Math.random() * avaiableStories.length)];

		setSelectedStory(story);
		window.scrollTo(0, 0);

		updateAvaiableStories(
			avaiableStories.filter((item) => item.title !== story.title),
		);
	};

	useEffect(() => {
		getNextStory();
	}, []);

	// console.log('RENDER - RandomStory');
	// console.log(avaiableStories);

	let content = (
		<div className='RandomStory'>
			<Story story={selectedStory} clicked={() => getNextStory()} />
		</div>
	);
	if (allRead) {
		content = (
			<div className='RandomStory'>
				<h2>
					<ProcessText text='Браво, прочитали сте све приче!' />
				</h2>
			</div>
		);
	}

	return content;
};

export default RandomStory;
