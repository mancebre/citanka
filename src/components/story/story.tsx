import React from 'react';
import ProcessText from '../processText/processText';
import './story.css';

type StoryType = {
  title: string;
  body: string;
};

interface Props {
  story: StoryType;
  clicked: React.MouseEventHandler<HTMLButtonElement>;
}

const Story = ({ story, clicked }: Props) => {
  // console.log('RENDER - Story');

  return (
    <>
      <h1 data-testid="story-title">
        <ProcessText text={story.title} />
      </h1>
      
      <div data-testid="story-body">
        <ProcessText text={story.body} />
      </div>
      <button className='Button' onClick={clicked} data-testid="story-button">
        СЛЕДЕЋА ПРИЧА
      </button>
    </>
  );

};

export default Story;
