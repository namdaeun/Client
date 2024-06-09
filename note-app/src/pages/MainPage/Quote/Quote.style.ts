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
  padding: 0 0 0.5rem 0.2rem;

  animation: ${fadeInUp} 0.5s ease-in-out;
`