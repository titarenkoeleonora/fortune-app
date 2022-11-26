import { useContext } from 'react';

import EpigramsContext from '../../store/epigramsContext';
import Button from '../UI/Buttons/Button/Button';
import Container from '../UI/Container/Container';
import { HeaderWrapper, Title } from './Header.styles';

const Header = () => {
  const { onOpenAddNewEpigramModal } = useContext(EpigramsContext);

  return (
    <HeaderWrapper>
      <Container>
        <Title>Fortune</Title>
        <Button onClick={onOpenAddNewEpigramModal}>+ Add your epigram</Button>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
