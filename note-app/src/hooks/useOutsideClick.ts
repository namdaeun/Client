import React, { useEffect } from 'react';

interface OutsideClickPropTypes {
  ref: React.RefObject<HTMLDivElement>;
  handleClose: () => void;
}

const useOutsideClick = ({ ref, handleClose }: OutsideClickPropTypes) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as HTMLElement)) handleClose();
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [ref, handleClose]);
};

export default useOutsideClick;
