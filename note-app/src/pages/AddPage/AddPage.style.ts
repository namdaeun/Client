import { css } from '@emotion/react';
import { themeProps } from '../../context/theme';
import { Theme } from './../../styles/theme';

export const pageWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const titleWrapper = css``;

export const titleInputWrapper = (theme: themeProps) => css`
  width: 100%;
  height: 100%;
  padding: 1rem;
  border: none;
  border-radius: 0.5rem;
  background-color: transparent;
  color: ${theme.textColor};
  &:focus {
    outline: none;
  }
`;

export const detailInputWrapper = (theme: themeProps) => css`
  width: 95%;
  height: 90%;
  border: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
  resize: none;
  line-height: 1rem;
  background-color: transparent;
  color: ${theme.textColor};
  &:focus {
    outline: none;
  }
  &::placeholder {
    align-items: baseline;
  }
`;

export const textAreaContainer = css`
  display: flex;
  flex-direction: column;
`;

export const textCount = css`
  margin-left: auto;
  padding: 0.5rem;
  ${Theme.fonts.detail};
`;

export const buttonContainer = css`
  display: flex;
  justify-content: space-between;
`;
