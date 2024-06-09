import { css } from "@emotion/react"
import { themeProps } from "../../context/theme"
import { Theme } from "../../styles/theme";

export const btnStyle = css`
  padding: 0.3rem 0.8rem;

  border-radius: 5px;
  border: none;

  ${Theme.fonts.detail};
  color: ${Theme.colors.btnTextColor};
  cursor: pointer;
`;

export const customStyle = (theme: themeProps) => ({
  default : css`
    background-color: ${theme.point1Color};
  `,
  secondary: css`
    background-color: ${theme.point2Color};
  `
});