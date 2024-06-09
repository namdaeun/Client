import { useTheme } from '../../context/theme';
import { icon, modeSwitch, wrapper } from './ModeSwitch.style';

const ModeSwitch = () => {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme.bgColor === '#FFFFFF';
  console.log({isLight});
  return (
    <div css={wrapper(theme)} onClick={toggleTheme}>
      <div css={modeSwitch(theme, isLight)}>
        <div css={icon(isLight, theme)}>

        </div>
      </div>
    </div>
  );
};

export default ModeSwitch;
