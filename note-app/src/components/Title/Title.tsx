import { css } from "@emotion/react";
import { Theme } from "../../styles/theme";

const Title = ({children}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <section css={[Theme.fonts.header, header]}>{children}</section>
  );
};
const header = css`
  display: flex;
  align-items: center;

  height: 12%;
`

export default Title;