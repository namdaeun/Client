import { css, keyframes } from "@emotion/react";

export const fadeInUp = keyframes`
  from {
    transform: translateY(60%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const quote = css`

  height: 8%;
  animation: ${fadeInUp} 0.5s ease-in-out;
`