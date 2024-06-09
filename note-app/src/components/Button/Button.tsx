import { useTheme } from "../../context/theme";
import { btnStyle, customStyle } from "./Button.style";

interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary';
  handleBtnClick: () => {};
}

const Button = ({children, variant='default', handleBtnClick}: ButtonProps) => {
  const {theme} = useTheme()
  return (
    <button
      type='button'
      css={[btnStyle, customStyle(theme)[variant]]}
      onClick={handleBtnClick}
      >
      {children}
    </button>
  );
};

export default Button;