import { useState } from 'react';
import { TweetData } from '../types/Defs';
import { FightingIdIsInvalid, loadLocalStorage } from '../api/Utils';
import {
  TweetPreview, SaveButton, TweetButton, ClipboardButton,
  TwdataformText, TwdataformTextarea, TwdataformCheck,
  TwdataformSelect, TwdataformSelectMulti
} from '../components/';
import { Grid, InputLabel } from '@mui/material';

function TweetFormPage() {
  const [twdata, setTwdata] = useState<TweetData>(loadLocalStorage());

  const updateTwdata = (key: keyof TweetData, val: string) => {
    const ltwdata: TweetData = { ...twdata };
    ltwdata[key] = val;
    setTwdata(ltwdata);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TwdataformText twdata={twdata} updateTwdata={updateTwdata}
          label='Fighter&#39;s ID' twdataKey='fightingId'
          isInvalid={FightingIdIsInvalid(twdata)}
          invalidFeedback='Fighter&#39;s IDの入力は、必須です。'
        />
      </Grid>
      <Grid item xs={12}>
        <TwdataformSelectMulti twdata={twdata} updateTwdata={updateTwdata}
          label='キャラ' twdataKey='charactor'
          options={[
            'optHeader:オリジナル',
            'リュウ', '春麗', 'ナッシュ', 'ベガ', 'キャミィ', 'バーディー', 'ケン', 'ネカリ',
            'バルログ', 'レインボー・ミカ', 'ラシード', 'かりん', 'ザンギエフ', 'ララ', 'ダルシム', 'ファン',
            'optHeader:シーズン1',
            'アレックス', 'ガイル', 'いぶき', 'バイソン', 'ジュリ', 'ユリアン',
            'optHeader:シーズン2',
            '豪鬼', 'コーリン', 'エド', 'アビゲイル', 'メナト', '是空',
            'optHeader:シーズン3',
            'さくら', 'ブランカ', 'ファルケ', 'コーディ', 'G', 'サガット',
            'optHeader:シーズン4',
            '影なる者', 'ポイズン', 'エドモンド本田', 'ルシア', 'ギル', 'セス',
            'optHeader:シーズン5',
            'ダン', 'ローズ', 'オロ', 'あきら', 'ルーク', 'イレブン'
          ]}
        />
      </Grid>
      <Grid item xs={12}>
        <TwdataformText twdata={twdata} updateTwdata={updateTwdata}
          label='LP' twdataKey='lp'
          comment='数字だけ入れると ランク名が補完/ランクロゴが付与 されます。'
        />
      </Grid>
      <Grid item xs={6}>
        <TwdataformSelect twdata={twdata} updateTwdata={updateTwdata}
          label='ラウンジ人数' twdataKey='loungePlayerMax'
          options={['', '2', '3', '4', '5', '6', '7', '8']}
        />
      </Grid>
      <Grid item xs={6}>
        <TwdataformSelect twdata={twdata} updateTwdata={updateTwdata}
          label='プライベートスロット' twdataKey='loungePlayerPrivate'
          options={['', '1', '2', '3', '4', '5', '6', '7']}
        />
      </Grid>
      <Grid item xs={6}>
        <TwdataformSelect twdata={twdata} updateTwdata={updateTwdata}
          label='ラウンド' twdataKey='gameround'
          options={['1ラウンド', '3ラウンド', '5ラウンド']}
        />
      </Grid>
      <Grid item xs={6}>
        <TwdataformSelect twdata={twdata} updateTwdata={updateTwdata}
          label='タイム' twdataKey='gametime'
          options={['60秒', '99秒']}
        />
      </Grid>
      <Grid item xs={6}>
        <TwdataformSelect twdata={twdata} updateTwdata={updateTwdata}
          label='連戦設定' twdataKey='game'
          options={['1本先取', '2本先取', '3本先取', '5本先取', '10本先取']}
        />
      </Grid>
      <Grid item xs={6}>
        <TwdataformSelect twdata={twdata} updateTwdata={updateTwdata}
          label='セット' twdataKey='gameset'
          options={['', 'x1', 'x2', 'x3', 'x4', 'x5', 'xN']}
        />
      </Grid>
      <Grid item xs={6}>
        <TwdataformSelect twdata={twdata} updateTwdata={updateTwdata}
          label='ハード' twdataKey='hardware'
          options={['', 'どっちもOK', 'PlayStationのみ', 'PCのみ']}
        />
      </Grid>
      <Grid item xs={6}>
        <TwdataformSelect twdata={twdata} updateTwdata={updateTwdata}
          label='通信制限' twdataKey='speedlimit'
          options={['', '3から5', '4から5', '5のみ', 'ON', 'OFF']}
        />
      </Grid>
      <Grid item xs={6}>
        <TwdataformSelect twdata={twdata} updateTwdata={updateTwdata}
          label='キャラセレ' twdataKey='charactorSelect'
          options={['ON', 'OFF']}
        />
      </Grid>
      <Grid item xs={6}>
        <TwdataformText twdata={twdata} updateTwdata={updateTwdata}
          label='パス' twdataKey='passcode'
        />
      </Grid>
      <Grid item xs={12}>
        <TwdataformText twdata={twdata} updateTwdata={updateTwdata}
          label='URL' twdataKey='url'
        />
      </Grid>
      <Grid item xs={12}>
        <TwdataformCheck twdata={twdata} updateTwdata={updateTwdata}
          label='ツイートに 本ツールのURL/ランクのロゴ を付与する。' twdataKey='attachToolUrl'
          comment='上記URLが空欄の時のみ有効です。LPが数字のみだと,ロゴがランクになります。'
        />
      </Grid>
      <Grid item xs={12}>
        <TwdataformSelect twdata={twdata} updateTwdata={updateTwdata}
          label='ロゴの種類' twdataKey='logotype'
          options={['ランク+キャラ', 'ランク', 'キャラ']}
        />
      </Grid>
      <Grid item xs={12}>
        <TwdataformTextarea twdata={twdata} updateTwdata={updateTwdata}
          label='先頭メッセージ' twdataKey='message'
        />
      </Grid>
      <Grid item xs={12}>
        <TwdataformTextarea twdata={twdata} updateTwdata={updateTwdata}
          label='コメント' twdataKey='comment'
        />
      </Grid>
      <Grid item xs={12}>
        <TwdataformCheck twdata={twdata} updateTwdata={updateTwdata}
          label='#ストVラウンジ募集 を付与する。' twdataKey='attachHashTag'
        />
      </Grid>
      <Grid item xs={12}>
        <hr />
        <InputLabel>プレビュー</InputLabel>
      </Grid>
      <TweetPreview twdata={twdata} />
      <Grid item xs={12}>
        <hr />
      </Grid>
      <Grid item xs={12}>
        <SaveButton twdata={twdata} />
      </Grid>
      <Grid item xs={12}>
        <TweetButton twdata={twdata} />
      </Grid>
      <Grid item xs={12}>
        <ClipboardButton twdata={twdata} />
      </Grid>
    </Grid>
  );
}

export default TweetFormPage;
