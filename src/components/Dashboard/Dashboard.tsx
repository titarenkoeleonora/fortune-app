import { useCallback, useContext, useEffect, useState } from 'react';

import EpigramsContext from '../../store/epigramsContext';
import { IEpigram } from '../../types';
import { DashboardWrapper } from './Dashboard.styles';
import Epigram from './Epigram/Epigram';

const Dashboard = () => {
  const { epigrams } = useContext(EpigramsContext);

  const [randomEpigram, setRandomEpigram] = useState<IEpigram>(epigrams[0]);
  const [isAutoSlideShow, setIsAutoSlideShow] = useState<boolean>(true);

  const cleanup = (intervalId: NodeJS.Timer) => clearInterval(intervalId);

  const getRandomEpigramIndex = useCallback(
    () => Math.floor(Math.random() * epigrams.length),
    [epigrams.length],
  );

  const getRandomEpigram = useCallback(() => {
    const index = getRandomEpigramIndex();

    setRandomEpigram(epigrams[index]);
  }, [epigrams, getRandomEpigramIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      getRandomEpigram();
    }, 3000);

    if (!isAutoSlideShow) {
      cleanup(intervalId);
    }

    return () => {
      cleanup(intervalId);
    };
  }, [isAutoSlideShow, getRandomEpigram]);

  const onStopRandomButtonClick = () =>
    setIsAutoSlideShow((prevIsAutoSlideShow) => !prevIsAutoSlideShow);

  return (
    <DashboardWrapper>
      {epigrams.length ? (
        <Epigram
          epigram={randomEpigram}
          isAutoSlideShow={isAutoSlideShow}
          onStopRandomButtonClick={onStopRandomButtonClick}
          onNextButtonClick={getRandomEpigram}
        />
      ) : (
        <p>Add your first epigram</p>
      )}
    </DashboardWrapper>
  );
};

export default Dashboard;
