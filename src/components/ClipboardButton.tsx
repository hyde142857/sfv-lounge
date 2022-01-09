import { Button } from 'react-bootstrap';
import { Props, TweetData } from '../types/Defs';
import { GetTweetText,GetUrl } from '../api/Utils';

function copyClipboard(twdata: TweetData) {
  const text = GetTweetText(twdata) + GetUrl(twdata);

  navigator.clipboard.writeText(text).then(function () {
    alert('クリップボードにコピーしました。ペーストしてご利用ください。');
  });
}

function ClipboardButton(props: Props) {
  return (
    <div className="d-grid gap-2">
      <Button variant="secondary" size="lg" onClick={() => copyClipboard(props.twdata)}>
        クリップボードにコピー
      </Button>
      <span>LINEやDiscordへ応募する際、活用ください。</span>
    </div>
  );
}

export default ClipboardButton;
