import { css } from "@emotion/react";
import { Theme } from "../../styles/theme";

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
  align-items: flex-end;
  justify-content: space-between;
`