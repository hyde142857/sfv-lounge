import { Button } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Props } from '../types/Defs';
import { submitTweet } from '../api/Utils';

function TweetButton(props: Props) {
  return (
    <Button
      variant="outlined" fullWidth size='large'
      startIcon={<TwitterIcon />}
      onClick={() => submitTweet(props.twdata)}
    >
      募集をツイートする
    </Button>
  );
}

export default TweetButton;
