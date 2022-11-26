import { css } from 'styled-components';

import { styled } from '../../../styles';

export const Main = styled.main(
  ({ theme }) => css`
    position: relative;
    width: 100vw;
    background-color: ${theme.colors.backgroundPrimary};
  `,
);
export default Main;
