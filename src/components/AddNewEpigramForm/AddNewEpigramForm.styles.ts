import { css } from 'styled-components';

import { styled } from '../../styles';

export const AddNewEpigramFormWrapper = styled.form(
  ({ theme }) => css`
    position: absolute;
    top: 30%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
    background-color: ${theme.colors.backgroundSecondary};
    border-radius: 4px;
    box-shadow: ${theme.colors.shadowPrimary};

    @media (min-width: ${theme.breakpoints.tablet}) {
      width: 400px;
      left: calc(50% - 200px);
    }
  `,
);

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
