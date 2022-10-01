import { GITHUB_PAGES_URL, GITHUB_REPOS_URL } from '../types/Defs';
import {
  TweetDataGetDefault,
  FightingIdIsInvalid,
  GetTweetText, GetLpRank, GetUrl, GetTweetTextLp,
  loadLocalStorage, saveLocalStorage, launchTwitterLive, submitTweet, launchNewIssue, launchGithub
} from './Utils'

test('FightingIdIsInvalid()', () => {
  let twdata = TweetDataGetDefault();
  twdata.fightingId = '';
  expect(FightingIdIsInvalid(twdata)).toEqual(true);
  twdata.fightingId = 'hoge';
  expect(FightingIdIsInvalid(twdata)).toEqual(false);
});

test('GetLpRank()', () => {
  expect(GetLpRank('')).toEqual('');
  expect(GetLpRank('hoge')).toEqual('');
  expect(GetLpRank('11111 hoge')).toEqual('');
  expect(GetLpRank('0')).toEqual('Rookie');
  expect(GetLpRank('500')).toEqual('Bronze');
  expect(GetLpRank('4000')).toEqual('Gold');
  expect(GetLpRank('11111')).toEqual('SuperPlatinum');
  expect(GetLpRank('400000')).toEqual('Warload');
  expect(GetLpRank('スパプラ')).toEqual('SuperPlatinum');
});

test('GetTweetLpText()', () => {
  expect(GetTweetTextLp('')).toEqual('');
  expect(GetTweetTextLp('hoge')).toEqual('【LP】hoge\n');
  expect(GetTweetTextLp('11111 hoge')).toEqual('【LP】11111 hoge\n');
  expect(GetTweetTextLp('0')).toEqual('【LP】0 [Rookie]\n');
  expect(GetTweetTextLp('500')).toEqual('【LP】500 [Bronze]\n');
  expect(GetTweetTextLp('4000')).toEqual('【LP】4000 [Gold]\n');
  expect(GetTweetTextLp('11111')).toEqual('【LP】11111 [SuperPlatinum]\n');
  expect(GetTweetTextLp('400000')).toEqual('【LP】400000 [Warload]\n');
  expect(GetTweetTextLp('スパプラ')).toEqual('【LP】スパプラ\n');
});

test('GetUrl()', () => {
  let twdata = TweetDataGetDefault();
  twdata.url = '';
  expect(GetUrl(twdata)).toEqual(GITHUB_PAGES_URL);
  twdata.url = 'hoge';
  expect(GetUrl(twdata)).toEqual('hoge');
});

test('GetTweetTextMessage()', () => {
  let twdata = TweetDataGetDefault();
  expect(GetTweetText(twdata)).toEqual(
    '【ID】\n' +
    '【連戦】1本先取\n' +
    '【キャラセレ】OFF\n' +
    '【パス】なし\n' +
    '#ストVラウンジ募集'
  );
  twdata.lp = 'hoge'
  twdata.charactor = 'リュウ'
  twdata.gameround = '5ラウンド'
  twdata.passcode = '9999'
  twdata.comment = 'hogehoge'
  twdata.message = 'hogehoge2'
  expect(GetTweetText(twdata)).toEqual(
    'hogehoge2\n\n' +
    '【ID】\n' +
    '【キャラ】リュウ\n' +
    '【LP】hoge\n' +
    '【ラウンド】5ラウンド 99秒\n' +
    '【連戦】1本先取\n' +
    '【キャラセレ】OFF\n' +
    '【パス】9999\n' +
    '【コメント】hogehoge\n' +
    '#ストVラウンジ募集'
  );
});

test('localStorage', () => {
  localStorage.clear();
  expect(loadLocalStorage()).toEqual(TweetDataGetDefault());
  saveLocalStorage(TweetDataGetDefault());
  expect(loadLocalStorage()).toEqual(TweetDataGetDefault());
});

test('utils function calls', () => {
  let actualUrl:string = '';
  let openSpy = jest.fn();
  openSpy.mockImplementation((url: string) => {
    actualUrl = url;
  });
  window.open = openSpy;

  launchTwitterLive();
  expect(actualUrl).toEqual(
    'https://twitter.com/hashtag/%E3%82%B9%E3%83%88V%E3%83%A9%E3%82%A6%E3%83%B3%E3%82%B8%E5%8B%9F%E9%9B%86?src=hashtag_click&f=live'
    );

  submitTweet(TweetDataGetDefault());
  expect(
    actualUrl.startsWith('https://twitter.com/intent/tweet?text=')
  ).toEqual(true);

  const text_uri = encodeURIComponent('スト5ラウンジ募集ツール(@hyde142857)\n▽▽▽ 要望などを記載ください。 ▽▽▽\n');
  const issue_url = 'https://twitter.com/intent/tweet?text=' + text_uri;
  launchNewIssue();
  expect(actualUrl).toEqual(issue_url);

  launchGithub();
  expect(actualUrl).toEqual(
    GITHUB_REPOS_URL
  );

  openSpy.mockRestore();
});
