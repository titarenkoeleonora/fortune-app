import { css } from 'styled-components';

import { styled } from '../../../styles';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputComponent = styled.input(
  ({ theme }) => css`
    padding: 5px 10px;
    background-color: transparent;
    border: 1px solid ${theme.colors.textPrimary};
    border-radius: 4px;
    font-family: 'PT Sans', sans-serif;
    font-size: 16px;
    outline: none;

    &:hover,
    &:focus {
      border-width: 2px;
    }
  `,
);

export const LabelComponent = styled.label`
  margin-bottom: 5px;
  font-size: 16px;
`;
