import { css } from '@emotion/react';
import { CSSProperties } from 'react';

export interface BoxStyleProps {
  display?: CSSProperties['display'];
  justifyContent?: CSSProperties['justifyContent'];
  alignItems?: CSSProperties['alignItems'];
  flexDirection?: CSSProperties['flexDirection'];
  boxSizing?: CSSProperties['boxSizing'];
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  margin?: CSSProperties['margin'];
  marginTop?: CSSProperties['marginTop'];
  marginLeft?: CSSProperties['marginLeft'];
  marginRight?: CSSProperties['marginRight'];
  marginBottom?: CSSProperties['marginBottom'];
  padding?: CSSProperties['padding'];
  paddingTop?: CSSProperties['paddingTop'];
  paddingRight?: CSSProperties['paddingRight'];
  paddingBottom?: CSSProperties['paddingBottom'];
  paddingLeft?: CSSProperties['paddingLeft'];
  border?: CSSProperties['border'];
  borderRadius?: CSSProperties['borderRadius'];
  borderColor?: CSSProperties['borderColor'];
  boxShadow?: CSSProperties['boxShadow'];
  backgroundColor?: CSSProperties['backgroundColor'];
  color?: CSSProperties['color'];
  backgroundImage?: CSSProperties['backgroundImage'];
  backgroundSize?: CSSProperties['backgroundSize'];
  backgroundPosition?: CSSProperties['backgroundPosition'];
  backgroundRepeat?: CSSProperties['backgroundRepeat'];
}

export const getBoxStyle = ({
  display,
  justifyContent,
  alignItems,
  flexDirection,
  width,
  height,
  margin,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  border,
  borderRadius,
  borderColor,
  boxShadow,
  backgroundColor,
  color,
  backgroundImage,
  backgroundSize,
  backgroundPosition,
  backgroundRepeat,
}: BoxStyleProps) =>
  css({
    display,
    justifyContent,
    alignItems,
    flexDirection,
    width,
    height,
    margin,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    border,
    borderRadius,
    borderColor,
    boxShadow,
    backgroundColor,
    color,
    backgroundImage,
    backgroundSize,
    backgroundPosition,
    backgroundRepeat,
  });
