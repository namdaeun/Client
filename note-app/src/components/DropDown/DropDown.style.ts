import { css } from '@emotion/react';

export const dropDownWrapper = css`
  display: flex;
  gap: 0.3rem;
  width: 6rem;
  white-space: nowrap;
  padding: 0.4rem 0.8rem;
  border-radius: 0.4rem;
  border: 1px solid gray;
  background-color: white;
  cursor: pointer;
`;

export const iconWrapper = css`
  display: flex;
  margin-left: auto;
`;

export const categoryListWrapper = css`
  display: flex;
  width: 5rem;
  flex-direction: column;
  padding: 0.5rem;
  border: 1px solid gray;
  border-radius: 0.4rem;
  font-size: 0.9rem;
  background-color: white;
`;

export const categoryWrapper = css`
  display: flex;
  padding: 0.2rem;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  &:not(:last-of-type) {
    border-bottom: 1px solid gray;
  }
`;
