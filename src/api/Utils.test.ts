import { GITHUB_PAGES_URL, GITHUB_REPOS_URL } from "../types/Defs";
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
  expect(GetLpRank("0")).toEqual("Rookie");
  expect(GetLpRank("500")).toEqual("Bronze");
  expect(GetLpRank("4000")).toEqual("Gold");
  expect(GetLpRank("11111")).toEqual("SuperPlatinum");
  expect(GetLpRank("400000")).toEqual("Warload");
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
    "#ストVラウンジ募集"
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
    "【LP】hoge\n" +
    "【ラウンド】5ラウンド 99秒\n" +
    "【連戦】1本先取\n" +
    "【キャラセレ】OFF\n" +
    "【ハード】どっちもOK\n" +
    "【通信制限】OFF\n" +
    "【パス】9999\n" +
    "【コメント】hogehoge\n" +
    "#ストVラウンジ募集"
  );
});

test('localStorage', () => {
  localStorage.clear();
  expect(loadLocalStorage()).toEqual(TweetDataGetDefault());
  saveLocalStorage(TweetDataGetDefault());
  expect(loadLocalStorage()).toEqual(TweetDataGetDefault());
});

test('utils function calls', () => {
  let actualUrl:string = "";
  let openSpy = jest.fn();
  openSpy.mockImplementation((url: string) => {
    actualUrl = url;
  });
  window.open = openSpy;

  launchTwitterLive();
  expect(actualUrl).toEqual(
    "https://twitter.com/hashtag/%E3%82%B9%E3%83%88V%E3%83%A9%E3%82%A6%E3%83%B3%E3%82%B8%E5%8B%9F%E9%9B%86?src=hashtag_click&f=live"
    );

  submitTweet(TweetDataGetDefault());
  expect(actualUrl).toEqual(
    "https://twitter.com/intent/tweet?text=%E3%80%90ID%E3%80%91%0A%E3%80%90%E9%80%A3%E6%88%A6%E3%80%911%E6%9C%AC%E5%85%88%E5%8F%96%0A%E3%80%90%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%BB%E3%83%AC%E3%80%91OFF%0A%E3%80%90%E3%83%8F%E3%83%BC%E3%83%89%E3%80%91%E3%81%A9%E3%81%A3%E3%81%A1%E3%82%82OK%0A%E3%80%90%E9%80%9A%E4%BF%A1%E5%88%B6%E9%99%90%E3%80%91OFF%0A%E3%80%90%E3%83%91%E3%82%B9%E3%80%91%E3%81%AA%E3%81%97%0A%23%E3%82%B9%E3%83%88V%E3%83%A9%E3%82%A6%E3%83%B3%E3%82%B8%E5%8B%9F%E9%9B%86%0A&url=https://hyde142857.github.io/sfv-lounge"
  );

  const text_uri = encodeURIComponent("スト5ラウンジ募集ツール(@hyde142857)\n▽▽▽ 要望などを記載ください。 ▽▽▽\n");
  const issue_url = "https://twitter.com/intent/tweet?text=" + text_uri;
  launchNewIssue();
  expect(actualUrl).toEqual(issue_url);

  launchGithub();
  expect(actualUrl).toEqual(
    GITHUB_REPOS_URL
  );

  openSpy.mockRestore();
});
