import { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { TweetData } from '../types/Defs';
import { FightingIdIsInvalid, loadLocalStorage, string2boolean } from '../api/Utils';
import {
  TweetPreview, SaveButton, TweetButton,
  TwdataformText, TwdataformTextarea, TwdataformSelect
} from '../components/';
import ClipboardButton from '../components/ClipboardButton';
import TwdataformSelectMulti from '../components/TwdataformSelectMulti';

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
    <TwdataformSelectMulti
      label="キャラ" value={twdata.charactor}
      options={[
        "リュウ", "春麗", "ナッシュ", "ベガ", "キャミィ", "バーディー", "ケン", "ネカリ",
        "バルログ", "レインボー・ミカ", "ラシード", "かりん", "ザンギエフ", "ララ", "ダルシム", "ファン",
        "アレックス", "ガイル", "いぶき", "バイソン", "ジュリ", "ユリアン", "豪鬼",
        "コーリン", "エド", "アビゲイル", "メナト", "是空", "さくら", "ブランカ", "ファルケ", "コーディ", "G", "サガット",
        "影なる者", "エドモンド本田", "ルシア", "ギル", "セス", "オロ", "風間あきら", "ルーク"
      ]}
      onChange={
        val => { setTwdata({ ...twdata, charactor: val }); }
      }
    />
    <TwdataformText twdata={twdata} updateTwdata={updateTwdata}
      label="LP" twdataKey='lp'
      comment="(数字だけ入れるとランク名が補完されます。)"
    />
    <Row>
      <Col>
        <TwdataformSelect
          label="ラウンジ人数" value={twdata.loungePlayerMax}
          options={["", "2", "3", "4", "5", "6", "7", "8"]}
          onChange={
            e => { setTwdata({ ...twdata, loungePlayerMax: e.target.value }); }
          }
        />
      </Col>
      <Col>
        <TwdataformSelect
          label="プライベートスロット" value={twdata.loungePlayerPrivate}
          options={["", "1", "2", "3", "4", "5", "6", "7"]}
          onChange={
            e => { setTwdata({ ...twdata, loungePlayerPrivate: e.target.value }); }
          }
        />
      </Col>
    </Row>
    <Row>
      <Col>
        <TwdataformSelect
          label="ラウンド" value={twdata.gameround}
          options={["1ラウンド", "3ラウンド", "5ラウンド"]}
          onChange={
            e => { setTwdata({ ...twdata, gameround: e.target.value }); }
          }
        />
      </Col>
      <Col>
        <TwdataformSelect
          label="タイム" value={twdata.gametime}
          options={["60秒", "99秒"]}
          onChange={
            e => { setTwdata({ ...twdata, gametime: e.target.value }); }
          }
        />
      </Col>
    </Row>
    <Row>
      <Col>
        <TwdataformSelect
          label="連戦設定" value={twdata.game}
          options={["1本先取", "2本先取", "3本先取", "5本先取", "10本先取"]}
          onChange={
            e => { setTwdata({ ...twdata, game: e.target.value }); }
          }
        />
      </Col>
      <Col>
        <TwdataformSelect
          label="セット" value={twdata.gameset}
          options={["", "x1", "x2", "x3", "x4", "x5", "xN"]}
          onChange={
            e => { setTwdata({ ...twdata, gameset: e.target.value }); }
          }
        />
      </Col>
    </Row>
    <Row>
      <Col>
        <TwdataformSelect
          label="ハード" value={twdata.hardware}
          options={["どっちもOK", "PlayStationのみ", "PCのみ"]}
          onChange={
            e => { setTwdata({ ...twdata, hardware: e.target.value }); }
          }
        />
      </Col>
      <Col>
        <TwdataformSelect
          label="通信制限" value={twdata.speedlimit}
          options={["ON", "OFF"]}
          onChange={
            e => { setTwdata({ ...twdata, speedlimit: e.target.value }); }
          }
        />
      </Col>
    </Row>
    <Row>
      <Col>
        <TwdataformSelect
          label="キャラセレ" value={twdata.charactorSelect}
          options={["ON", "OFF"]}
          onChange={
            e => { setTwdata({ ...twdata, charactorSelect: e.target.value }); }
          }
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
    <Form.Group className="mb-3">
      <Form.Check
        type="checkbox"
        id="attachToolUrl"
        label="ツイートに本ツールのURLを付与して、応援する。(上記URLが空欄の時のみ有効です。)"
        checked={string2boolean(twdata.attachToolUrl, true)}
        onChange={
          e => { updateTwdata('attachToolUrl', String(e.target.checked)); }
        }
      />
    </Form.Group>
    <TwdataformTextarea
      label="先頭メッセージ"
      value={twdata.message}
      onChange={
        e => { setTwdata({ ...twdata, message: e.target.value }); }
      }
    />
    <TwdataformTextarea
      label="コメント" value={twdata.comment}
      onChange={
        e => { setTwdata({ ...twdata, comment: e.target.value }); }
      }
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
