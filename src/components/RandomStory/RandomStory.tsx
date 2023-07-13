import React, { useState } from 'react';
import './RandomStory.css';
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
import Story from '../Story/Story';
import ProcessText from '../ProcessText/ProcessText';

type StoryType = {
  title: string;
  body: string;
};

interface Props {
  // Props definition
  'data-testid'?: string; // Add the data-testid prop
}

const RandomStory: React.FC<Props> = ({ 'data-testid': testId }) => { // Destructure the data-testid prop
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
  const [selectedStory, setSelectedStory] = useState<StoryType | null>(null);

  const getNextStory = () => {
    if (avaiableStories.length < 1) {
      setAllRead(true);
      return;
    }

    const randomIndex = Math.floor(Math.random() * avaiableStories.length);
    const selected = avaiableStories[randomIndex];

    setSelectedStory(selected);
    updateAvaiableStories((prevStories) =>
      prevStories.filter((story) => story.title !== selected.title)
    );
  };

  const handleNextStory = () => {
    getNextStory();
    window.scrollTo(0, 0);
  };

  if (!selectedStory) {
    getNextStory();
    return null; // You may render a loading state or placeholder here
  }

  let content = (
    <div className="RandomStory" data-testid={testId}> {/* Add the data-testid prop to the root div */}
      <Story story={selectedStory} clicked={handleNextStory} />
    </div>
  );
  if (allRead) {
    content = (
      <div className="RandomStory" data-testid={testId}> {/* Add the data-testid prop to the root div */}
        <h2>
          <ProcessText text="Браво, прочитали сте све приче!" />
        </h2>
      </div>
    );
  }

  return content;
};

export default RandomStory;
