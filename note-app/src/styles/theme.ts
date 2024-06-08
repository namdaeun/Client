import { css } from '@emotion/react';

const colors = {
  red: '#D1180B',
  yellow: '#FFFF00',
  green: '#009000',
  black: '#010101',
  grayBlack: '#151515',
  gray100: '#1f1f1f',
  gray90: '#333',
  gray80: '#505050',
  gray70: '#747474',
  gray60: '#959595',
  gray50: '#A5A5A5',
  gray40: '#BCBCBC',
  gray30: '#D3D3D3',
  gray20: '#EAEAEA',
  gray10: '#F4F4F4',
  gray5: '#F9F9F9',
  white: '#FFF',
};

const fonts = {
  title1: css`
    font-weight: 600;
    font-size: 2.4rem;
    font-family: 'Pretendard Variable', sans-serif;
    font-style: normal;
    line-height: 120%; /* 28.8px */
  `,
  title2: css`
    font-weight: 600;
    font-size: 2.2rem;
    font-family: 'Pretendard Variable', sans-serif;
    font-style: normal;
    line-height: 120%; /* 26.4px */
  `,
  title3: css`
    font-weight: 500;
    font-size: 2.2rem;
    font-family: 'Pretendard Variable', sans-serif;
    font-style: normal;
    line-height: 120%; /* 26.4px */
    letter-spacing: -0.66px;
  `,
  title4: css`
    font-weight: 600;
    font-size: 1.8rem;
    font-family: 'Pretendard Variable', sans-serif;
    font-style: normal;
    line-height: 130%; /* 23.4px */
  `,
  title5: css`
    font-weight: 600;
    font-size: 2.2rem;
    font-family: 'Pretendard Variable', sans-serif;
    font-style: normal;
    line-height: 120%; /* 26.4px */
  `,
  title6: css`
    font-weight: 700;
    font-size: 2.6rem;
    font-family: 'Pretendard Variable', sans-serif;
    font-style: normal;
    line-height: 200%; /* 52px */
  `,
  title7: css`
    font-weight: 600;
    font-size: 26px;
    font-family: 'Pretendard Variable', sans-serif;
    font-style: normal;
    line-height: 200%; /* 52px */
  `,
  title8: css`
    font-weight: 700;
    font-size: 48px;
    font-family: 'Pretendard Variable', sans-serif;
    font-style: normal;
    line-height: 120%; /* 57.6px */
    letter-spacing: -1.44px;
  `,
  subtitle1: css`
    font-weight: 600;
    font-size: 1.6rem;
    font-family: 'Pretendard Variable', sans-serif;
    font-style: normal;
    line-height: 150%; /* 24px */
  `,
  subtitle2: css`
    font-weight: 600;
    font-size: 1.6rem;
    font-family: 'Pretendard Variable', sans-serif;
    font-style: normal;
    line-height: 120%; /* 19.2px */
  `,
  subtitle3: css`
    font-weight: 400;
    font-size: 26px;
    font-family: 'Pretendard Variable', sans-serif;
    font-style: normal;
    line-height: 150%; /* 39px */
    letter-spacing: -0.78px;
  `,
  body1: css`
    font-weight: 400;
    font-size: 1.6rem;
    font-family: 'Pretendard Variable', sans-serif;
    font-style: normal;
    line-height: 120%; /* 19.2px */
  `,
  body2: css`
    font-weight: 500;
    font-size: 1.4rem;
    font-family: 'Pretendard Variable', sans-serif;
    font-style: normal;
    line-height: 120%; /* 16.8px */
  `,
  body3: css`
    font-weight: 400;
    font-size: 1.4rem;
    font-family: 'Pretendard Variable', sans-serif;
    font-style: normal;
    line-height: 120%; /* 16.8px */
  `,
  body4: css`
    font-weight: 500;
    font-size: 1.3rem;
    font-family: 'Pretendard Variable', sans-serif;
    font-style: normal;
    line-height: 120%; /* 15.6px */
  `,
  body5: css`
    font-weight: 400;
    font-size: 1.2rem;
    font-family: 'Pretendard Variable', sans-serif;
    font-style: normal;
    line-height: 200%; /* 24px */
  `,
  button1: css`
    font-weight: 500;
    font-size: 1.6rem;
    font-family: 'Pretendard Variable', sans-serif;
    font-style: normal;
    line-height: 120%; /* 19.2px */
  `,
  button2: css`
    font-weight: 600;
    font-size: 1.4rem;
    font-family: 'Pretendard Variable', sans-serif;
    font-style: normal;
    line-height: 140%; /* 19.6px */
  `,
};

export const theme = {
  colors,
  fonts,
};
