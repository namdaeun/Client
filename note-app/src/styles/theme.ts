import { css } from '@emotion/react';

const colors = {
  redDot: '#FC5230',
  yellowDot: '#FFCD4A',
  greenDot: '#568A35',

  heartOn: '#FECCBE',
  heartOff: '#FFFFFF',
} as const;

const lightTheme = {
  bgColor: '#FFFFFF',
  textColor: '#000000',
  subTextColor: '#787878',
  subText2Color: '#9E9E9E',

  btnTextColor: '#FFFFFFF',
  point1Color: '#AAABAA',
  point2Color: '#E5BEA7',

  redBorderColor: '#FC5230',
} as const;

const darkTheme = {
  bgColor: '#000000',
  textColor: '#FFFFFF',
  subTextColor: '#787878',
  subText2Color: '#9E9E9E',

  btnTextColor: '#FFFFFFF',
  point1Color: '#E9A6B0',
  point2Color: '#446DA3',

  redBorderColor: '#AE3A1E',
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
    font-weight: 600;
    font-size: 5.87rem;
    font-family: 'Single Day', ;
    font-style: normal;
    line-height: 120%; /* 26.4px */
    letter-spacing: -0.66px;
  `,
  quote: css`
    font-weight: 600;
    font-size: 2.7rem;
    font-family: 'Single Day', sans-serif;
    font-style: normal;
    line-height: 130%; /* 23.4px */
  `,
} as const;

export const Theme = {
  colors,
  lightTheme,
  darkTheme,
  fonts,
};
