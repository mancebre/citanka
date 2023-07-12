import React from 'react';
import StoryLine from '../storyLine/storyLine';

interface Props {
  text: string;
}

const ProcessText = ({ text }: Props) => {
  const breakLines = (storyBody: string): string[] => {
    const bodyArr = storyBody.split(/\n/);
    return bodyArr;
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
