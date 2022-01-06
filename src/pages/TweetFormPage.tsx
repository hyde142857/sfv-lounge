import { useState } from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import { TweetData } from '../types/Defs';
import { FightingIdIsInvalid, loadLocalStorage } from '../api/Utils';
import { TweetPreview, SaveButton, TweetButton, CheckLiveTweetButton, RequestButton } from '../components/';

function TweetFormPage(){
  const [twdata, setTwdata] = useState<TweetData>(loadLocalStorage());

  return (<>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Fighter's ID</Form.Label>
        <Form.Control
          type="text"
          onChange={
            e => {
              setTwdata({ ...twdata, fightingId: e.target.value });
            }
          }
          value={twdata.fightingId}
          isInvalid={FightingIdIsInvalid(twdata)} />
        <div className="invalid-feedback">Fighter's IDの入力は、必須です。</div>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>キャラ</Form.Label>
        <Form.Control
          type="text"
          onChange={
            e => {
              setTwdata({ ...twdata, charactor: e.target.value });
            }
          }
          value={twdata.charactor} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>LP</Form.Label>
        <Form.Control
          type="text"
          onChange={
            e => {
              setTwdata({ ...twdata, lp: e.target.value });
            }
          }
          value={twdata.lp} />
      </Form.Group>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>ラウンド</Form.Label>
            <Form.Select
              onChange={
                e => {
                  setTwdata({ ...twdata, gameround: e.target.value });
                }
              }
              value={twdata.gameround} >
              <option>1ラウンド</option>
              <option>3ラウンド</option>
              <option>5ラウンド</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>タイム</Form.Label>
            <Form.Select
              onChange={
                e => {
                  setTwdata({ ...twdata, gametime: e.target.value });
                }
              }
              value={twdata.gametime} >
              <option>60秒</option>
              <option>99秒</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>連戦設定</Form.Label>
            <Form.Select
              onChange={
                e => {
                  setTwdata({ ...twdata, game: e.target.value });
                }
              }
              value={twdata.game} >
              <option>1本先取</option>
              <option>2本先取</option>
              <option>3本先取</option>
              <option>5本先取</option>
              <option>10本先取</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>セット</Form.Label>
            <Form.Select
              onChange={
                e => {
                  setTwdata({ ...twdata, gameset: e.target.value });
                }
              }
              value={twdata.gameset} >
              <option></option>
              <option>x1</option>
              <option>x2</option>
              <option>x3</option>
              <option>x4</option>
              <option>x5</option>
              <option>xN</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-3">
        <Form.Label>キャラセレ</Form.Label>
        <Form.Select
          onChange={
            e => {
              setTwdata({ ...twdata, charactorSelect: e.target.value });
            }
          }
          value={twdata.charactorSelect} >
          <option>ON</option>
          <option>OFF</option>
        </Form.Select>
      </Form.Group>
      <Row>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>ハード</Form.Label>
            <Form.Select
              onChange={
                e => {
                  setTwdata({ ...twdata, hardware: e.target.value });
                }
              }
              value={twdata.hardware} >
              <option>どっちもOK</option>
              <option>PlayStationのみ</option>
              <option>PCのみ</option>
            </Form.Select>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3">
            <Form.Label>通信制限</Form.Label>
            <Form.Select
              onChange={
                e => {
                  setTwdata({ ...twdata, speedlimit: e.target.value });
                }
              }
              value={twdata.speedlimit} >
              <option>ON</option>
              <option>OFF</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-3">
        <Form.Label>パス</Form.Label>
        <Form.Control
          type='text'
          onChange={
            e => {
              setTwdata({ ...twdata, passcode: e.target.value });
            }
          }
          value={twdata.passcode} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>URL(配信など)</Form.Label>
        <Form.Control
          type='text'
          onChange={
            e => {
              setTwdata({ ...twdata, url: e.target.value });
            }
          }
          value={twdata.url} />
          <span>空欄時,本ツールのURLになります。</span>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>先頭メッセージ</Form.Label>
        <Form.Control
          as="textarea" rows={3}
          onChange={
            e => {
              setTwdata({ ...twdata, message: e.target.value });
            }
          }
          value={twdata.message} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>コメント</Form.Label>
        <Form.Control
          as="textarea" rows={3}
          onChange={
            e => {
              setTwdata({ ...twdata, comment: e.target.value });
            }
          }
          value={twdata.comment} />
      </Form.Group>
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