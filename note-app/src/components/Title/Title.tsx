import { css } from "@emotion/react";
import { Theme } from "../../styles/theme";

const Title = ({children}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <section css={[Theme.fonts.header, header]}>{children}</section>
  );
};
const header = css`
  padding: 0.5rem 0 0 0.2rem;
`

export default Title;