import { css } from "@emotion/react";
import { Theme } from "../../../styles/theme";
import { themeProps } from "../../../context/theme";

export const formStyle = css`
  display: flex;
  justify-content: space-between;

  width: 100%;

`
export const search = (theme: themeProps) => css`
  ${Theme.fonts.detail}
  width: 100%;
  background: none;
  color: ${theme.textColor};
  border: none;
  outline: none;
  &::placeholder {
    color: ${Theme.colors.subTextColor};
  }
`

export const btnStyle = css`
  padding: none;
  margin: none;
  border: none;
  background: none;

  cursor: pointer;
`