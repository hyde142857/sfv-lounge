import { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { TweetData } from '../types/Defs';
import { FightingIdIsInvalid, loadLocalStorage } from '../api/Utils';
import { TweetPreview, SaveButton, TweetButton, CheckLiveTweetButton, RequestButton } from '../components/';
import TwdataformText from '../components/TwdataformText';
import TwdataformSelect from '../components/TwdataformSelect';
import TwdataformTextarea from '../components/TwdataformTextarea';

function TweetFormPage(){
  const [twdata, setTwdata] = useState<TweetData>(loadLocalStorage());

  return (<>
    <Form>
      <TwdataformText
        label="Fighter's ID" value={twdata.fightingId}
        onChange={
          e => { setTwdata({ ...twdata, fightingId: e.target.value }); }
        }
        isInvalid={FightingIdIsInvalid(twdata)}
        invalidFeedback="Fighter's IDの入力は、必須です。"
      />
      <TwdataformText
        label="キャラ" value={twdata.charactor}
        onChange={
          e => { setTwdata({ ...twdata, charactor: e.target.value }); }
        }
      />
      <TwdataformText
        label="LP" value={twdata.lp}
        onChange={
          e => { setTwdata({ ...twdata, lp: e.target.value }); }
        }
      />
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
      <TwdataformSelect
        label="キャラセレ" value={twdata.charactorSelect}
        options={["ON", "OFF"]}
        onChange={
          e => { setTwdata({ ...twdata, charactorSelect: e.target.value }); }
        }
      />
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
      <TwdataformText
        label="パス" value={twdata.passcode}
        onChange={
          e => { setTwdata({ ...twdata, passcode: e.target.value }); }
        }
      />
      <TwdataformText
        label="URL (空欄時,本ツールのURLになります。)"
        value={twdata.url}
        onChange={
          e => { setTwdata({ ...twdata, url: e.target.value }); }
        }
      />
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
      <Form.Group className="mb-3">
        <TweetButton twdata={twdata} />
      </Form.Group>
    </Form>
    <hr />
    <CheckLiveTweetButton />
    <hr />
    <RequestButton twdata={twdata} />
  </>);
}

export default TweetFormPage;