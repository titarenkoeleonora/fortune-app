import { css } from 'styled-components';

import { styled } from '../../../styles';

export const EpigramWrapper = styled.div(
  ({ theme }) => css`
    padding: 30px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: calc(100% - 30px);
    background-color: ${theme.colors.backgroundSecondary};
    border-radius: 4px;
    box-shadow: ${theme.colors.shadowPrimary};

    @media (min-width: ${theme.breakpoints.tablet}) {
      width: 400px;
    }
  `,
);

export const Text = styled.p`
  margin: 0;
  align-self: flex-start;
  font-size: 16px;
`;

export const Author = styled.p`
  margin: 0;
  align-self: flex-end;
  font-size: 16px;
  font-style: italic;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;
