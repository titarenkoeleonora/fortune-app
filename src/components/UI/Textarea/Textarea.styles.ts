import { css } from 'styled-components';

import { styled } from '../../../styles';

export const TextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextareaComponent = styled.textarea(
  ({ theme }) => css`
    padding: 5px 10px;
    height: 95px;
    background-color: transparent;
    border: 1px solid ${theme.colors.textPrimary};
    border-radius: 4px;
    font-family: 'PT Sans', sans-serif;
    font-size: 16px;
    resize: none;
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
