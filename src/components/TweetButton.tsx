import { TwitterLoginButton } from 'react-social-login-buttons';
import { Props } from '../types/Defs';
import { submitTweet} from '../api/Utils';

function TweetButton(props:Props) {
  return (
    <TwitterLoginButton onClick={() => submitTweet(props.twdata)} >
      <span>募集をツイートする</span>
    </TwitterLoginButton>
  );
}

export default TweetButton;
