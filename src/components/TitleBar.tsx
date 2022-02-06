import {
  AppBar, IconButton, PaletteMode, Toolbar, Typography
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IosShareIcon from '@mui/icons-material/IosShare';
import { GITHUB_PAGES_URL } from '../types/Defs';
import { ThisPageGetDesc, ThisPageGetTitle } from '../api/Utils';

interface TitleBarProps {
  onClickColorMode: () => void;
  palettemode: PaletteMode;
}

function shareHandler() {
  const shareData: ShareData = {
    title: ThisPageGetTitle(),
    text: ThisPageGetDesc(),
    url: GITHUB_PAGES_URL,
  };
  navigator.share(shareData);
}

export default function TitleBar(props: TitleBarProps) {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          スト5ラウンジ募集ツール
        </Typography>
        <div>
          <IconButton sx={{ ml: 1 }} onClick={shareHandler} color='inherit'>
            <IosShareIcon />
          </IconButton>
          <IconButton sx={{ ml: 1 }} onClick={props.onClickColorMode} color='inherit'>
            {props.palettemode === 'dark' ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}
