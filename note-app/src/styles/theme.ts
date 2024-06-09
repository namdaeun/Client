import { css } from '@emotion/react';

const colors = {
  redDot: '#FC5230',
  yellowDot: '#FFCD4A',
  greenDot: '#568A35',

  heartOn: '#FECCBE',
  heartOff: '#FFFFFF',
} as const;

const fonts = {
  title: css`
    font-weight: 600;
    font-size: 3.09rem;
    font-family: 'Pretendard Variable', sans-serif;
    font-style: normal;
    line-height: 120%; /* 28.8px */
  `,
  detail: css`
    font-weight: 600;
    font-size: 1.87rem;
    font-family: 'Pretendard Variable', sans-serif;
    font-style: normal;
    line-height: 120%; /* 26.4px */
  `,

  header: css`
    font-weight: 400;
    font-size: 5.87rem;
    font-family: 'Single Day', cursive;
    font-style: normal;
    line-height: 120%; /* 26.4px */
    letter-spacing: -0.66px;
  `,
  quote: css`
    font-weight: 400;
    font-size: 2.7rem;
    font-family: 'Single Day', cursive;
    font-style: normal;
    line-height: 130%; /* 23.4px */
  `,
} as const;

export const Theme = {
  colors,
  fonts,
};
