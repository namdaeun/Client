import React from 'react';
import { useTheme } from '../../../context/theme';
import { hexToRGBA } from '../../../utils/hexToRGBA';
import { BoxStyleProps, getBoxStyle } from './ContentBox.style';

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  styles?: BoxStyleProps;
  variant?: 'default' | 'content';
  isFocus?: boolean;
}

const ContentBox = ({ children, styles = {}, variant = 'default', isFocus }: BoxProps) => {
  const { theme } = useTheme();
  const customStyle = {
    default: {
      width: '50vh',
      height: '60vh',

      padding: '1rem',
      borderRadius: '2rem',
      backgroundColor: hexToRGBA({ hex: theme.bgColor, opacity: 0.589 }),
      color: theme.textColor,
    },
    content: {
      borderRadius: '0.5rem',
      backgroundColor: theme.bgColor,
      color: theme.textColor,
      border: isFocus ? `1.5px solid ${theme.point2Color}` : `1.5px solid transparent`,
    },
  };

  return <div css={getBoxStyle({ ...styles, ...customStyle[variant] })}>{children}</div>;
};

export default ContentBox;
