import { css } from "@emotion/react";
import { circleStyle, dotWrapper, wrapper } from "./BoxHeader.style";
import { Theme } from "../../styles/theme";
import ModeSwitch from "../ModeSwitch/ModeSwitch";

export const BoxHeader = () => {

  return (
    <div css={wrapper}>
      <div css={dotWrapper}>
        <Circle color={Theme.colors.redDot}/>
        <Circle color={Theme.colors.yellowDot}/>
        <Circle color={Theme.colors.greenDot}/>
      </div>
      <ModeSwitch/>
    </div>
  );
};

const Circle = ({color}:{color: string}) => (
  <div css={[circleStyle, css`background-color: ${color};`]} />
);
