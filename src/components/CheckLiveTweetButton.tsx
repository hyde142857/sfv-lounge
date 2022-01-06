import { TwitterLoginButton } from 'react-social-login-buttons';
import { launchTwitterLive } from '../api/Utils';

function CheckLiveTweetButton() {
  return (
    <TwitterLoginButton onClick={() => launchTwitterLive()} >
      <span>#ストVラウンジ募集 を見る</span>
    </TwitterLoginButton>
  );
}

export default CheckLiveTweetButton;
