import { Button } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import { launchTwitterBot } from '../api/Utils';

function CheckTweetBotButton() {
  return (
    <Button
      variant='contained' fullWidth size='large'
      startIcon={<TwitterIcon />}
      onClick={() => launchTwitterBot()}
    >
      @ストVラウンジ募集BOT を見る
    </Button>
  );
}

export default CheckTweetBotButton;
