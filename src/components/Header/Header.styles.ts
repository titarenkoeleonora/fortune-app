import { css } from 'styled-components';

import { styled } from '../../styles';

export const HeaderWrapper = styled.header(
  ({ theme }) => css`
    padding: 23px 0;
    background-color: ${theme.colors.backgroundPrimary};
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);

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
