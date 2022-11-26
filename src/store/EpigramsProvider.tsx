import { FC, PropsWithChildren, useState } from 'react';

import { initialEpigrams } from '../data/initialEpigrams';
import { IEpigram } from '../types';
import EpigramsContext from './epigramsContext';

const EpigramContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isAddNewEpigramOpened, setIsAddNewEpigramOpened] = useState<boolean>(false);
  const [epigrams, setEpigrams] = useState<IEpigram[]>(initialEpigrams);

  const onOpenAddNewEpigramModal = () => setIsAddNewEpigramOpened(true);
  const onCloseAddNewEpigramModal = () => setIsAddNewEpigramOpened(false);

  const onAddEpigram = (newEpigram: IEpigram) =>
    setEpigrams((prevEpigrams) => [...prevEpigrams, newEpigram]);

  return (
    <EpigramsContext.Provider
      value={{
        epigrams,
        isAddNewEpigramOpened,
        onOpenAddNewEpigramModal,
        onCloseAddNewEpigramModal,
        onAddEpigram,
      }}
    >
      {children}
    </EpigramsContext.Provider>
  );
};

export default EpigramContextProvider;
