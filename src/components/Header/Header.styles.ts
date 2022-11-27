import { css } from 'styled-components';

import { styled } from '../../styles';

export const HeaderWrapper = styled.header(
  ({ theme }) => css`
    padding: 23px 0;
    background-color: ${theme.colors.backgroundPrimary};

    > div {
      display: flex;
      justify-content: space-between;
    }
  `,
);

export const Title = styled.h1(
  ({ theme }) => css`
    padding: 0;
    margin: 0;
    font-size: 23px;
    color: ${theme.colors.textPrimary};
  `,
);
