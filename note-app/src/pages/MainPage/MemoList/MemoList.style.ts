import { css } from '@emotion/react';
import { Theme } from '../../../styles/theme';

export const textWrapper = css`
  display: flex;
  position: relative;
  flex-direction: column;
  gap: 0.1rem;
  cursor: pointer;
`;

export const detailText = css`
  color: ${Theme.colors.subTextColor};
`;

export const iconWrapper = css`
  display: flex;
  gap: 1rem;
  cursor: pointer;
`;

export const iconStyle = css`
  position: absolute;
  bottom: 2rem;
  right: 4.8rem;
  border: 1.5px;
  cursor: 'pointer';
`;
