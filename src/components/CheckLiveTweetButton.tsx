import { Button } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import { launchTwitterLive } from '../api/Utils';

function CheckLiveTweetButton() {
  return (
    <Button
      variant="outlined" fullWidth size='large'
      startIcon={<TwitterIcon />}
      onClick={() => launchTwitterLive()}
    >
      #ストVラウンジ募集 を見る
    </Button>
  );
}

export default CheckLiveTweetButton;
