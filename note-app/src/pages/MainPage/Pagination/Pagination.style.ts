import { css } from '@emotion/react';
import { Theme } from '../../../styles/theme';

export const wrapper = css`
  display: flex;
  gap: 0.3rem;
`;

export const pagewrapper = css`
  border: none;
  padding: 0.5rem;
  color: ${Theme.colors.subText2Color};
  background-color: transparent;
  cursor: pointer;
`;
