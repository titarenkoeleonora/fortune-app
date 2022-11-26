import { createContext } from 'react';

import { initialEpigrams } from '../data/initialEpigrams';
import { IEpigram } from '../types';

const EpigramsContext = createContext({
  epigrams: initialEpigrams,
  isAddNewEpigramOpened: false,
  onOpenAddNewEpigramModal: () => {
    // empty function
  },
  onCloseAddNewEpigramModal: () => {
    // empty function
  },
  onAddEpigram: (epigram: IEpigram) => {
    // empty function
  },
});

export default EpigramsContext;
