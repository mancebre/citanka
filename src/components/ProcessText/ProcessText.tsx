import React from 'react';
import StoryLine from '../StoryLine/StoryLine';

interface Props {
  text: string;
}

const ProcessText = ({ text }: Props) => {
  const breakLines = (storyBody: string): string[] => {
    return storyBody.split(/\n/);
  };

  const textArr = breakLines(text);

  return (
    <div>
      {textArr.map((line, index) => (
          <div data-testid="story-line" key={index}>
            <StoryLine line={line} />
          </div>
      ))}
    </div>
  );
};

export default ProcessText;
