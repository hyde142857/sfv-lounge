import { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { TweetData } from '../types/Defs';
import { FightingIdIsInvalid, loadLocalStorage } from '../api/Utils';
import {
  TweetPreview, SaveButton, TweetButton, ClipboardButton,
  TwdataformText, TwdataformTextarea, TwdataformCheck,
  TwdataformSelect, TwdataformSelectMulti
} from '../components/';

function TweetFormPage() {
  const [twdata, setTwdata] = useState<TweetData>(loadLocalStorage());

  const updateTwdata = (key: keyof TweetData, val: string) => {
    let ltwdata: TweetData = { ...twdata };
    ltwdata[key] = val;
    setTwdata(ltwdata);
  }

  return (<Form>
    <TwdataformText twdata={twdata} updateTwdata={updateTwdata}
      label="Fighter's ID" twdataKey='fightingId'
      isInvalid={FightingIdIsInvalid(twdata)}
      invalidFeedback="Fighter's IDの入力は、必須です。"
    />
    <TwdataformSelectMulti twdata={twdata} updateTwdata={updateTwdata}
      label="キャラ" twdataKey='charactor'
      options={[
        "optHeader:オリジナル",
        "リュウ", "春麗", "ナッシュ", "ベガ", "キャミィ", "バーディー", "ケン", "ネカリ",
        "バルログ", "レインボー・ミカ", "ラシード", "かりん", "ザンギエフ", "ララ", "ダルシム", "ファン",
        "optHeader:シーズン1",
        "アレックス", "ガイル", "いぶき", "バイソン", "ジュリ", "ユリアン",
        "optHeader:シーズン2",
        "豪鬼", "コーリン", "エド", "アビゲイル", "メナト", "是空",
        "optHeader:シーズン3",
        "さくら", "ブランカ", "ファルケ", "コーディ", "G", "サガット",
        "optHeader:シーズン4",
        "影なる者", "ポイズン", "エドモンド本田", "ルシア", "ギル", "セス",
        "optHeader:シーズン5",
        "ダン", "ローズ", "オロ", "あきら", "ルーク", "イレブン"
      ]}
    />
    <TwdataformText twdata={twdata} updateTwdata={updateTwdata}
      label="LP" twdataKey='lp'
      comment="(数字だけ入れるとランク名が補完されます。)"
    />
    <Row>
      <Col>
        <TwdataformSelect twdata={twdata} updateTwdata={updateTwdata}
          label="ラウンジ人数" twdataKey='loungePlayerMax'
          options={["", "2", "3", "4", "5", "6", "7", "8"]}
        />
      </Col>
      <Col>
        <TwdataformSelect twdata={twdata} updateTwdata={updateTwdata}
          label="プライベートスロット" twdataKey='loungePlayerPrivate'
          options={["", "1", "2", "3", "4", "5", "6", "7"]}
        />
      </Col>
    </Row>
    <Row>
      <Col>
        <TwdataformSelect twdata={twdata} updateTwdata={updateTwdata}
          label="ラウンド" twdataKey='gameround'
          options={["1ラウンド", "3ラウンド", "5ラウンド"]}
        />
      </Col>
      <Col>
        <TwdataformSelect twdata={twdata} updateTwdata={updateTwdata}
          label="タイム" twdataKey='gametime'
          options={["60秒", "99秒"]}
        />
      </Col>
    </Row>
    <Row>
      <Col>
        <TwdataformSelect twdata={twdata} updateTwdata={updateTwdata}
          label="連戦設定" twdataKey='game'
          options={["1本先取", "2本先取", "3本先取", "5本先取", "10本先取"]}
        />
      </Col>
      <Col>
        <TwdataformSelect twdata={twdata} updateTwdata={updateTwdata}
          label="セット" twdataKey='gameset'
          options={["", "x1", "x2", "x3", "x4", "x5", "xN"]}
        />
      </Col>
    </Row>
    <Row>
      <Col>
        <TwdataformSelect twdata={twdata} updateTwdata={updateTwdata}
          label="ハード" twdataKey='hardware'
          options={["どっちもOK", "PlayStationのみ", "PCのみ"]}
        />
      </Col>
      <Col>
        <TwdataformSelect twdata={twdata} updateTwdata={updateTwdata}
          label="通信制限" twdataKey='speedlimit'
          options={["ON", "OFF"]}
        />
      </Col>
    </Row>
    <Row>
      <Col>
        <TwdataformSelect twdata={twdata} updateTwdata={updateTwdata}
          label="キャラセレ" twdataKey='charactorSelect'
          options={["ON", "OFF"]}
        />
      </Col>
      <Col>
        <TwdataformText twdata={twdata} updateTwdata={updateTwdata}
          label="パス" twdataKey='passcode'
        />
      </Col>
    </Row>
    <TwdataformText twdata={twdata} updateTwdata={updateTwdata}
      label="URL" twdataKey='url'
    />
    <TwdataformCheck twdata={twdata} updateTwdata={updateTwdata}
      label="ツイートに本ツールのURLを付与して、応援する。" twdataKey='attachToolUrl'
      comment='(上記URLが空欄の時のみ有効です。)'
    />
    <TwdataformTextarea twdata={twdata} updateTwdata={updateTwdata}
      label="先頭メッセージ" twdataKey='message'
    />
    <TwdataformTextarea twdata={twdata} updateTwdata={updateTwdata}
      label="コメント" twdataKey='comment'
    />
    <Form.Group className="mb-3">
      <Form.Label>プレビュー</Form.Label>
      <TweetPreview twdata={twdata} />
    </Form.Group>
    <Form.Group className="mb-3">
      <SaveButton twdata={twdata} />
    </Form.Group>
    <hr />
    <Form.Group className="mb-3">
      <TweetButton twdata={twdata} />
    </Form.Group>
    <hr />
    <Form.Group className="mb-3">
      <ClipboardButton twdata={twdata} />
    </Form.Group>
  </Form>
  );
}

export default TweetFormPage;
