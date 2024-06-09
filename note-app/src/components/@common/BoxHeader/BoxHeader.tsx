import { css } from "@emotion/react";
import { circleStyle, dotWrapper, wrapper } from "./BoxHeader.style";
import { Theme } from '../../../styles/theme';
import { useTheme } from "../../../context/theme";

export const BoxHeader = () => {
  const { toggleTheme } = useTheme();

  return (
    <div css={wrapper}>
      <div css={dotWrapper}>
        <Circle color={Theme.colors.redDot}/>
        <Circle color={Theme.colors.yellowDot}/>
        <Circle color={Theme.colors.greenDot}/>
      </div>
      <button onClick={toggleTheme}>안녕</button>

    </div>
  );
};

const Circle = ({color}:{color: string}) => (
  <div css={[circleStyle, css`background-color: ${color};`]} />
);
