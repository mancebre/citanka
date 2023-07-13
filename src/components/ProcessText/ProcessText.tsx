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
        <StoryLine line={line} key={index} />
      ))}
    </div>
  );
};

export default ProcessText;
