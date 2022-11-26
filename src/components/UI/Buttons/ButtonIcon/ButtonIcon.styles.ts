import { css } from 'styled-components';

import { styled } from '../../../../styles';

export const ButtonIconWrapper = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    flex-shrink: 0;
    gap: 10px;
    width: 35px;
    height: 35px;
    color: ${theme.colors.textPrimary};
    text-transform: uppercase;
  `,
);

export const Button = styled.button(
  ({ theme }) => css`
    padding: 0;
    width: 35px;
    height: 35px;
    display: flex;
    flex-shrink: 0;
    color: ${theme.colors.textPrimary};
    border-radius: 50%;
    cursor: pointer;

    &:hover,
    &:focus {
      opacity: 0.5;
    }
  `,
);

export const Icon = styled.img`
  width: 100%;
  height: 100%;
  max-width: 100%;
`;
