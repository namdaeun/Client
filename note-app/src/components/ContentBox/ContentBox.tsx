import React from 'react';
import { BoxStyleProps, getBoxStyle } from './ContentBox.style';
import { useTheme } from '../../context/theme';
import { hexToRGBA } from '../../utils/hexToRGBA';

export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  styles?: BoxStyleProps;
  variant?: 'default' | 'content';
}

const ContentBox = ({ children, styles = {}, variant = 'default' }: BoxProps) => {
  const {theme} = useTheme();
  const customStyle = {
    'default': {
      width: '50vh',
      height: '60vh',
      
      padding: '1.2rem',
      borderRadius: '2rem',
      backgroundColor: hexToRGBA({hex: theme.bgColor, opacity: 0.589}),
      color: theme.textColor,
    },
    'content': {
      display: 'flex',
      alignItems: 'center',
      borderRadius: '0.5rem',
      backgroundColor: theme.bgColor,
      color: theme.textColor,
    },
  }

  return <div css={getBoxStyle({ ...customStyle[variant], ...styles })}>{children}</div>;
};

export default ContentBox;
