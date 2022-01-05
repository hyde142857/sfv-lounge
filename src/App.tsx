import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container, Navbar, Form, Card, Row, Col, Button } from 'react-bootstrap';
import { TwitterLoginButton, GithubLoginButton } from 'react-social-login-buttons';

const GITHUB_REPOS_URL = 'https://github.com/hyde142857/sfv-lounge';
const GITHUB_PAGES_URL = 'https://hyde142857.github.io/sfv-lounge';

interface TweetData {
  message: string;
  fightingId: string;
  charactor: string;
  lp: string;
  gameround: string;
  gametime: string;
  game: string;
  gameset: string;
  charactorSelect: string;
  hardware: string;
  speedlimit: string;
  passcode: string;
  url: string;
  comment: string;
}

type Props = {
  twdata: TweetData;
}

function FightingIdIsInvalid(twdata: TweetData) {
  if (twdata.fightingId === "") {
    return true;
  }
  return false;
}

function GetLpRank(lp: string) {
  if (!lp.match(/^\d+$/)) {
    return "";
  }
  const lpnum = Number(lp);
  if (lpnum < 500) {
    return "[Rookie]"
  }
  if (lpnum < 1000) {
    return "[Bronze]"
  }
  if (lpnum < 1500) {
    return "[SuperBronze]"
  }
  if (lpnum < 2000) {
    return "[UltraBronze]"
  }
  if (lpnum < 3000) {
    return "[Silver]"
  }
  if (lpnum < 3500) {
    return "[SuperSilver]"
  }
  if (lpnum < 4000) {
    return "[UltraSilver]"
  }
  if (lpnum < 5500) {
    return "[Gold]"
  }
  if (lpnum < 6500) {
    return "[SuperGold]"
  }
  if (lpnum < 7500) {
    return "[UltraCold]"
  }
  if (lpnum < 10000) {
    return "[Platinum]"
  }
  if (lpnum < 12000) {
    return "[SuperPlatinum]"
  }
  if (lpnum < 14000) {
    return "[UltraPlatinum]"
  }
  if (lpnum < 20000) {
    return "[Diamond]"
  }
  if (lpnum < 25000) {
    return "[SuperDiamond]"
  }
  if (lpnum < 30000) {
    return "[UltraDiamond]"
  }
  if (lpnum < 35000) {
    return "[Master]"
  }
  if (lpnum < 100000) {
    return "[GrandMaster]"
  }
  if (lpnum < 300000) {
    return "[UltimateGrandMaster]"
  }
  return "[Warload]"
}

function GetTweetText(twdata: TweetData) {
  let twtext = "";

  if (twdata.message !== "") {
    twtext += twdata.message + "\n\n";
  }
  twtext += "【ID】" + twdata.fightingId + "\n";
  if (twdata.charactor !== "") {
    twtext += "【キャラ】" + twdata.charactor + "\n";
  }
  if (twdata.lp !== "") {
    twtext += "【LP】" + twdata.lp + " " + GetLpRank(twdata.lp) + "\n";
  }
  if (twdata.gameround !== "3ラウンド" || twdata.gametime !== "99秒") {
    twtext += "【ラウンド】" + twdata.gameround + " " + twdata.gametime + "\n";
  }
  twtext += "【連戦】" + twdata.game + twdata.gameset + "\n";
  twtext += "【キャラセレ】" + twdata.charactorSelect + "\n";
  twtext += "【ハード】" + twdata.hardware + "\n";
  twtext += "【通信制限】" + twdata.speedlimit + "\n";
  twtext += "【パス】";
  if (twdata.passcode === "") {
    twtext += "なし\n";
  } else {
    twtext += twdata.passcode + "\n";
  }
  if (twdata.comment !== "") {
    twtext += "【コメント】" + twdata.comment + "\n";
  }
  twtext += "#ストVラウンジ募集\n";
  return (twtext);
}

function TweetPreview(props: Props) {
  return (
    <>
      <Card border="primary">
        <Card.Body>
          <pre>
            {GetTweetText(props.twdata)}
          </pre>
        </Card.Body>
      </Card>
    </>);
}

function submitTweet(twdata:TweetData){
  const twdata_uri = encodeURIComponent(GetTweetText(twdata));
  let url = GITHUB_PAGES_URL;
  if ( twdata.url !== ""){
    url = twdata.url;
  }
  window.open("https://twitter.com/intent/tweet?text=" + twdata_uri + "&url=" + url, "_blank");
}

function launchTwitterLive() {
  window.open( "https://twitter.com/hashtag/%E3%82%B9%E3%83%88V%E3%83%A9%E3%82%A6%E3%83%B3%E3%82%B8%E5%8B%9F%E9%9B%86?src=hashtag_click&f=live", "_blank");
}

function launchNewIssue(twdata: TweetData) {
  window.open( GITHUB_REPOS_URL + "/issues", "_blank");
}

function launchGithub(twdata: TweetData) {
  window.open( GITHUB_REPOS_URL, "_blank");
}

function saveLocalStorage(twdata:TweetData){
  localStorage.setItem('sfvlounge_roommatch.message', twdata.message);
  localStorage.setItem('sfvlounge_roommatch.fightingid', twdata.fightingId);
  localStorage.setItem('sfvlounge_roommatch.charactor', twdata.charactor);
  localStorage.setItem('sfvlounge_roommatch.lp', twdata.lp);
  localStorage.setItem('sfvlounge_roommatch.gameround', twdata.gameround);
  localStorage.setItem('sfvlounge_roommatch.gametime', twdata.gametime);
  localStorage.setItem('sfvlounge_roommatch.game', twdata.game);
  localStorage.setItem('sfvlounge_roommatch.gameset', twdata.gameset);
  localStorage.setItem('sfvlounge_roommatch.charactorselect', twdata.charactorSelect);
  localStorage.setItem('sfvlounge_roommatch.hardware', twdata.hardware);
  localStorage.setItem('sfvlounge_roommatch.speedlimit', twdata.speedlimit);
  localStorage.setItem('sfvlounge_roommatch.passcode', twdata.passcode);
  localStorage.setItem('sfvlounge_roommatch.url', twdata.url);
  localStorage.setItem('sfvlounge_roommatch.comment', twdata.comment);
}

function loadLocalStorage() {
  let twdata: TweetData = {
    message: "",
    fightingId: "",
    charactor: "",
    lp: "",
    gameround: "3ラウンド",
    gametime: "99秒",
    game: "1本先取",
    gameset: "",
    charactorSelect: "OFF",
    hardware: "どっちもOK",
    speedlimit: "OFF",
    passcode: "",
    url: "",
    comment: "",
  };
  twdata.message = localStorage.getItem('sfvlounge_roommatch.message') || "";
  twdata.fightingId = localStorage.getItem('sfvlounge_roommatch.fightingid') || "";
  twdata.charactor = localStorage.getItem('sfvlounge_roommatch.charactor') || "";
  twdata.lp = localStorage.getItem('sfvlounge_roommatch.lp') || "";
  twdata.gameround = localStorage.getItem('sfvlounge_roommatch.gameround') || "3ラウンド";
  twdata.gametime = localStorage.getItem('sfvlounge_roommatch.gametime') || "99秒";
  twdata.game = localStorage.getItem('sfvlounge_roommatch.game') || "1本先取";
  twdata.gameset = localStorage.getItem('sfvlounge_roommatch.gameset') || "";
  twdata.charactorSelect = localStorage.getItem('sfvlounge_roommatch.charactorselect') || "OFF";
  twdata.hardware = localStorage.getItem('sfvlounge_roommatch.hardware') || "どっちもOK";
  twdata.speedlimit = localStorage.getItem('sfvlounge_roommatch.speedlimit') || "OFF";
  twdata.passcode = localStorage.getItem('sfvlounge_roommatch.passcode') || "";
  twdata.url = localStorage.getItem('sfvlounge_roommatch.url') || "";
  twdata.comment = localStorage.getItem('sfvlounge_roommatch.comment') || "";
  return twdata;
}

function SaveButton(props: Props) {
  return (
    <div className="d-grid gap-2">
      <Button variant="warning" size="lg" onClick={() => saveLocalStorage(props.twdata)}>
        ブラウザにデータを保存
      </Button>
    </div>
  );
}


function TweetButton(props:Props) {
  return (
    <TwitterLoginButton onClick={() => submitTweet(props.twdata)} >
      <span>募集をツイートする</span>
    </TwitterLoginButton>
  );
}

function CheckLiveTweetButton() {
  return (
    <TwitterLoginButton onClick={() => launchTwitterLive()} >
      <span>#ストVラウンジ募集 を見る</span>
    </TwitterLoginButton>
  );
}

function RequestButton(props:Props) {
  return (
    <Row>
      <Col>
        <GithubLoginButton onClick={() => launchNewIssue(props.twdata)} >
          <span>要望・問題報告</span>
        </GithubLoginButton>
      </Col>
      <Col>
        <GithubLoginButton onClick={() => launchGithub(props.twdata)} >
          <span>GitHub repository</span>
        </GithubLoginButton>
      </Col>
    </Row>
  );
}

function App() {
  const [twdata, setTwdata] = useState<TweetData>(loadLocalStorage());

  return (<>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">スト5ラウンジ募集</Navbar.Brand>
      </Container>
    </Navbar>
    <Container>
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
        <SaveButton twdata={twdata} />
        <hr />
        <TweetPreview twdata={twdata} />
        <hr />
        <TweetButton twdata={twdata} />
        <hr />
        <CheckLiveTweetButton />
        <hr />
        <RequestButton twdata={twdata} />
      </Form>
    </Container></>
  );
}

export default App;
