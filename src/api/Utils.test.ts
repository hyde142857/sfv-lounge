import { GITHUB_PAGES_URL } from "../types/Defs";
import {
  TweetDataGetDefault,
  FightingIdIsInvalid,
  GetTweetText, GetLpRank, GetUrl,
  loadLocalStorage, saveLocalStorage, launchTwitterLive, submitTweet, launchNewIssue, launchGithub
} from "./Utils"

test('FightingIdIsInvalid()', () => {
  let twdata = TweetDataGetDefault();
  twdata.fightingId = "";
  expect(FightingIdIsInvalid(twdata)).toEqual(true);
  twdata.fightingId = "hoge";
  expect(FightingIdIsInvalid(twdata)).toEqual(false);
});

test('GetLpRank()', () => {
  expect(GetLpRank("")).toEqual("");
  expect(GetLpRank("hoge")).toEqual("");
  expect(GetLpRank("11111 hoge")).toEqual("");
  expect(GetLpRank("0")).toEqual("[Rookie]");
  expect(GetLpRank("500")).toEqual("[Bronze]");
  expect(GetLpRank("4000")).toEqual("[Gold]");
  expect(GetLpRank("11111")).toEqual("[SuperPlatinum]");
  expect(GetLpRank("400000")).toEqual("[Warload]");
});

test('GetUrl()', () => {
  let twdata = TweetDataGetDefault();
  twdata.url = "";
  expect(GetUrl(twdata)).toEqual(GITHUB_PAGES_URL);
  twdata.url = "hoge";
  expect(GetUrl(twdata)).toEqual("hoge");
});

test('GetTweetTextMessage()', () => {
  let twdata = TweetDataGetDefault();
  expect(GetTweetText(twdata)).toEqual(
    "【ID】\n" +
    "【連戦】1本先取\n" +
    "【キャラセレ】OFF\n" +
    "【ハード】どっちもOK\n" +
    "【通信制限】OFF\n" +
    "【パス】なし\n" +
    "#ストVラウンジ募集\n"
  );
  twdata.lp = "hoge"
  twdata.charactor = "リュウ"
  twdata.gameround = "5ラウンド"
  twdata.passcode = "9999"
  twdata.comment = "hogehoge"
  twdata.message = "hogehoge2"
  expect(GetTweetText(twdata)).toEqual(
    "hogehoge2\n\n" +
    "【ID】\n" +
    "【キャラ】リュウ\n" +
    "【LP】hoge \n" +
    "【ラウンド】5ラウンド 99秒\n" +
    "【連戦】1本先取\n" +
    "【キャラセレ】OFF\n" +
    "【ハード】どっちもOK\n" +
    "【通信制限】OFF\n" +
    "【パス】9999\n" +
    "【コメント】hogehoge\n" +
    "#ストVラウンジ募集\n"
  );
});

test('localStorage', () => {
  localStorage.clear();
  expect(loadLocalStorage()).toEqual(TweetDataGetDefault());
  saveLocalStorage(TweetDataGetDefault());
  expect(loadLocalStorage()).toEqual(TweetDataGetDefault());
});

test('utils function calls', () => {
  launchTwitterLive();
  submitTweet(TweetDataGetDefault());
  launchNewIssue();
  launchGithub();
});
