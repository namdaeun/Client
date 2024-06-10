import { css } from '@emotion/react';
import { Theme } from '../../styles/theme';
import { themeProps } from './../../context/theme';

export const wrapper = css`
  display: flex;
  position: relative;
  flex-direction: column;
`;

export const dropDownWrapper = (theme: themeProps) => css`
  display: flex;
  gap: 0.3rem;
  width: 5.5rem;
  height: 8%;
  white-space: nowrap;
  padding: 0.4rem 0.5rem;
  border-radius: 0.4rem;
  border: 1px solid gray;
  cursor: pointer;
  color: ${theme.textColor};
  background-color: ${theme.bgColor};
`;

export const iconWrapper = css`
  display: flex;
  margin-left: auto;
`;

export const categoryListWrapper = (theme: themeProps) => css`
  display: flex;
  position: absolute;
  width: 5.5rem;
  flex-direction: column;
  padding: 0.1rem 0;
  border: 1px solid gray;
  border-radius: 0.4rem;
  ${Theme.fonts.detail}
  color: ${Theme.colors.subTextColor};
  background-color: ${theme.bgColor};
  top: 100%;
  z-index: 1;
`;

export const categoryWrapper = css`
  display: flex;
  padding: 0.2rem;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  &:not(:last-of-type) {
    border-bottom: 1px solid gray;
  }
`;
