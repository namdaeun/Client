import { css } from "@emotion/react";
import { Theme } from "../../styles/theme";

export const wrapper = css`
  width: 100%;
  height: 95%;
`
export const iconWrapper = css`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const content = css`
  ${Theme.fonts.detail}
  height: 100%;
  overflow-x: scroll;
`;

export const btnWrapper = css`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 8%;
`