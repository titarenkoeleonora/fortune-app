import { FC } from 'react';

import CopyIcon from '../../../images/copy.svg';
import StopIcon from '../../../images/pause.svg';
import PlayIcon from '../../../images/play.svg';
import NextIcon from '../../../images/rightArrow.svg';
import { IEpigram } from '../../../types';
import ButtonIcon from '../../UI/Buttons/ButtonIcon/ButtonIcon';
import { Author, ButtonsContainer, EpigramWrapper, Text } from './Epigram.styles';

interface EpigramProps {
  epigram: IEpigram;
  isAutoSlideShow: boolean;
  onStopRandomButtonClick(): void;
  onNextButtonClick(): void;
}

const Epigram: FC<EpigramProps> = ({
  epigram,
  isAutoSlideShow,
  onStopRandomButtonClick,
  onNextButtonClick,
}) => {
  const { text, author } = epigram;

  const onCopyButtonClick = () => {
    const epigramForCopy = `"${text}" - ${author}`;

    navigator.clipboard.writeText(epigramForCopy);
  };

  return (
    <EpigramWrapper>
      <Text>{text}</Text>
      <Author>- {author}</Author>
      <ButtonsContainer>
        <ButtonIcon icon={CopyIcon} alt="copy to the clipboard" onClick={onCopyButtonClick} />
        <ButtonIcon icon={NextIcon} alt="load next epigram" onClick={onNextButtonClick} />
        <ButtonIcon
          icon={isAutoSlideShow ? StopIcon : PlayIcon}
          alt="stop random slideshow"
          onClick={onStopRandomButtonClick}
        />
      </ButtonsContainer>
    </EpigramWrapper>
  );
};

export default Epigram;
