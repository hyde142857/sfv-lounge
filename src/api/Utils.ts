import { GITHUB_PAGES_URL, GITHUB_REPOS_URL, TweetData } from '../types/Defs';

export function ThisPageGetTitle(): string {
  const title_obj = document.querySelector('meta[property="og:title"]');
  const title = title_obj ? title_obj.getAttribute('content') : '';
  return title || '';
}

export function ThisPageGetDesc(): string {
  const desc_obj = document.querySelector('meta[property="og:description"]');
  const desc = desc_obj ? desc_obj.getAttribute('content') : '';
  return desc || '';
}

export function FightingIdIsInvalid(twdata: TweetData) {
  if (twdata.fightingId === '') {
    return true;
  }
  return false;
}

const LpRankList: { [key: string]: number } = {
  'Rookie': 0,
  'Bronze': 500,
  'SuperBronze': 1000,
  'UltraBronze': 1500,
  'Silver': 2000,
  'SuperSilver': 3000,
  'UltraSilver': 3500,
  'Gold': 4000,
  'SuperGold': 5500,
  'UltraGold': 6500,
  'Platinum': 7500,
  'SuperPlatinum': 10000,
  'UltraPlatinum': 12000,
  'Diamond': 14000,
  'SuperDiamond': 20000,
  'UltraDiamond': 25000,
  'Master': 30000,
  'GrandMaster': 35000,
  'UltimateGrandMaster': 100000,
  'Warload': 300000,
};

const CharacterLogoList: { [key: string]: string } = {
  'リュウ': 'ryu',
  '春麗': 'cnl',
  'ナッシュ': 'nsh',
  'ベガ': 'veg',
  'キャミィ': 'cmy',
  'バーディー': 'brd',
  'ケン': 'ken',
  'ネカリ': 'ncl',
  'バルログ': 'blr',
  'レインボー・ミカ': 'rmk',
  'ラシード': 'rsd',
  'かりん': 'krn',
  'ザンギエフ': 'zgf',
  'ララ': 'lar',
  'ダルシム': 'dsm',
  'ファン': 'fan',
  'アレックス': 'alx',
  'ガイル': 'gul',
  'いぶき': 'ibk',
  'バイソン': 'bsn',
  'ジュリ': 'jri',
  'ユリアン': 'urn',
  '豪鬼': 'gok',
  'コーリン': 'kln',
  'エド': 'ed',
  'アビゲイル': 'abg',
  'メナト': 'mnt',
  '是空': 'zku',
  'さくら': 'skr',
  'ブランカ': 'blk',
  'ファルケ': 'flk',
  'コーディ': 'cdy',
  'G': 'g_on',
  'サガット': 'sag_on',
  '影なる者': 'kge',
  'ポイズン': 'psn',
  'エドモンド本田': 'hnd',
  'ルシア': 'lca',
  'ギル': 'gil',
  'セス': 'sth',
  'ダン': 'dan',
  'ローズ': 'rse',
  'オロ': 'oro',
  'あきら': 'akr',
  'ルーク': 'lke',
  // 'イレブン': '', // none
};

export function GetLpRank(lp: string) {
  let rank = '';
  if (!lp.match(/^\d+$/)) {
    return '';
  }
  const lpnum = Number(lp);
  for (const k in LpRankList) {
    if (LpRankList[k] <= lpnum) {
      rank = k;
    }
  }
  return rank;
}

function GetTweetTextMessage(message: string) {
  if (message !== '') {
    return message + '\n\n';
  }
  return '';
}

function GetTweetTextCharactor(charactor: string) {
  if (charactor !== '') {
    return '【キャラ】' + charactor + '\n';
  }
  return '';
}

function GetTweetTextLp(lp: string) {
  if (lp !== '') {
    const str: string[] = [];
    str.push('【LP】' + lp);
    if (GetLpRank(lp) !== '') {
      str.push('[' + GetLpRank(lp) + ']');
    }
    return str.join(' ') + '\n';
  }
  return '';
}

function GetTweetTextGame(gameround: string, gametime: string) {
  if (gameround !== '3ラウンド' || gametime !== '99秒') {
    return '【ラウンド】' + gameround + ' ' + gametime + '\n';
  }
  return '';
}

function GetTweetTextPasscode(passcode: string) {
  let twtext = '【パス】';
  if (passcode === '') {
    twtext += 'なし\n';
  } else {
    twtext += passcode + '\n';
  }
  return twtext;
}

function GetTweetTextComment(comment: string) {
  if (comment !== '') {
    return '【コメント】' + comment + '\n';
  }
  return '';
}

function GetTweetTextPleyerMax(playermax: string, playerprivate: string) {
  let text = '';
  if (playermax !== '') {
    text = '【部屋人数】' + playermax + '人';
    if (playerprivate !== '') {
      text += ' 内プライベート' + playerprivate + '人';
    }
    return text + '\n';
  }
  return '';
}

function GetTweetTextHardware(hardware: string) {
  if (hardware !== '') {
    return '【ハード】' + hardware + '\n';
  }
  return '';
}


function GetTweetTextSpeedlimit(speedlimit: string) {
  if (speedlimit !== '') {
    return '【通信制限】' + speedlimit + '\n';
  }
  return '';
}

export function GetTweetText(twdata: TweetData) {
  let twtext = '';
  twtext += GetTweetTextMessage(twdata.message);
  twtext += '【ID】' + twdata.fightingId + '\n';
  twtext += GetTweetTextCharactor(twdata.charactor);
  twtext += GetTweetTextLp(twdata.lp);
  twtext += GetTweetTextGame(twdata.gameround, twdata.gametime);
  twtext += GetTweetTextPleyerMax(twdata.loungePlayerMax, twdata.loungePlayerPrivate);
  twtext += '【連戦】' + twdata.game + twdata.gameset + '\n';
  twtext += '【キャラセレ】' + twdata.charactorSelect + '\n';
  twtext += GetTweetTextHardware(twdata.hardware);
  twtext += GetTweetTextSpeedlimit(twdata.speedlimit);
  twtext += GetTweetTextPasscode(twdata.passcode);
  twtext += GetTweetTextComment(twdata.comment);
  if (twdata.attachHashTag === 'true') {
    twtext += '#ストVラウンジ募集';
  }
  return (twtext);
}

function GetImgPathRankAndChar(twdata: TweetData) {
  const rank = GetLpRank(twdata.lp);
  const firstchar = twdata.charactor.split(' ')[0];
  if (rank !== '' && firstchar in CharacterLogoList) {
    return 'rankandchar/' + rank + '-' + CharacterLogoList[firstchar];
  }
  if (rank !== '') {
    return GetImgPathRank(twdata);
  }
  return GetImgPathChar(twdata);
}

function GetImgPathRank(twdata: TweetData) {
  const rank = GetLpRank(twdata.lp);
  if (rank !== '') {
    return 'rank/' + rank;
  }
  return '';
}

function GetImgPathChar(twdata: TweetData) {
  const firstchar = twdata.charactor.split(' ')[0];
  if (firstchar in CharacterLogoList) {
    return 'character/' + CharacterLogoList[firstchar];
  }
  return '';
}

export function GetImgPath(twdata: TweetData) {
  switch (twdata.logotype) {
    case 'ランク+キャラ':
      return GetImgPathRankAndChar(twdata);
    case 'ランク':
      return GetImgPathRank(twdata);
    default:
      return GetImgPathChar(twdata);
  }
}

export function GetUrl(twdata: TweetData) {
  if (twdata.url !== '') {
    return twdata.url;
  }
  if (string2boolean(twdata.attachToolUrl, true)) {
    const path = GetImgPath(twdata);
    if (path !== '') {
      return GITHUB_PAGES_URL + '/' + path + '.html';
    }
    return GITHUB_PAGES_URL;
  }
  return '';
}

export function submitTweet(twdata: TweetData) {
  const twdata_uri = encodeURIComponent(GetTweetText(twdata) + '\n');
  const url = GetUrl(twdata);
  let openurl = 'https://twitter.com/intent/tweet?text=' + twdata_uri;
  if (url !== '') {
    openurl += '&url=' + url;
  }
  window.open(openurl, '_blank');
}

export function shareApps() {
  const twdata_uri = encodeURIComponent('\n');
  let openurl = 'https://twitter.com/intent/tweet?text=' + twdata_uri;
  openurl += '&url=' + GITHUB_PAGES_URL;
  window.open(openurl, '_blank');
}

export function launchTwitterLive() {
  window.open('https://twitter.com/hashtag/%E3%82%B9%E3%83%88V%E3%83%A9%E3%82%A6%E3%83%B3%E3%82%B8%E5%8B%9F%E9%9B%86?src=hashtag_click&f=live', '_blank');
}

export function launchTwitterBot() {
  window.open('https://twitter.com/BotDragonet');
}

export function launchNewIssue() {
  const text_uri = encodeURIComponent('スト5ラウンジ募集ツール(@hyde142857)\n▽▽▽ 要望などを記載ください。 ▽▽▽\n');
  window.open('https://twitter.com/intent/tweet?text=' + text_uri, '_blank');
}

export function launchGithub() {
  window.open(GITHUB_REPOS_URL, '_blank');
}

export function copyClipboard(twdata: TweetData, hundleShow: () => void) {
  const text = GetTweetText(twdata) + '\n' + GetUrl(twdata);
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      hundleShow();
    });
  }
}
function saveLocalStorageTweettext(twdata: TweetData) {
  localStorage.setItem('sfvlounge_roommatch.message', twdata.message);
  localStorage.setItem('sfvlounge_roommatch.url', twdata.url);
  localStorage.setItem('sfvlounge_roommatch.logotype', twdata.logotype);
  localStorage.setItem('sfvlounge_roommatch.attachtoolurl', String(twdata.attachToolUrl));
  localStorage.setItem('sfvlounge_roommatch.comment', twdata.comment);
  localStorage.setItem('sfvlounge_roommatch.attachhashtag', String(twdata.attachHashTag));
}

function saveLocalStoragePlayerdata(twdata: TweetData) {
  localStorage.setItem('sfvlounge_roommatch.fightingid', twdata.fightingId);
  localStorage.setItem('sfvlounge_roommatch.charactor', twdata.charactor);
  localStorage.setItem('sfvlounge_roommatch.lp', twdata.lp);
}

export function saveLocalStorage(twdata: TweetData) {
  saveLocalStorageTweettext(twdata);
  saveLocalStoragePlayerdata(twdata);
  localStorage.setItem('sfvlounge_roommatch.loungeplayermax', twdata.loungePlayerMax);
  localStorage.setItem('sfvlounge_roommatch.loungeplayerprivate', twdata.loungePlayerPrivate);
  localStorage.setItem('sfvlounge_roommatch.gameround', twdata.gameround);
  localStorage.setItem('sfvlounge_roommatch.gametime', twdata.gametime);
  localStorage.setItem('sfvlounge_roommatch.game', twdata.game);
  localStorage.setItem('sfvlounge_roommatch.gameset', twdata.gameset);
  localStorage.setItem('sfvlounge_roommatch.charactorselect', twdata.charactorSelect);
  localStorage.setItem('sfvlounge_roommatch.hardware', twdata.hardware);
  localStorage.setItem('sfvlounge_roommatch.speedlimit', twdata.speedlimit);
  localStorage.setItem('sfvlounge_roommatch.passcode', twdata.passcode);
}

export function TweetDataGetDefault() {
  const twdata: TweetData = {
    message: '',
    fightingId: '',
    charactor: '',
    lp: '',
    loungePlayerMax: '',
    loungePlayerPrivate: '',
    gameround: '3ラウンド',
    gametime: '99秒',
    game: '1本先取',
    gameset: '',
    charactorSelect: 'OFF',
    hardware: '',
    speedlimit: '',
    passcode: '',
    url: '',
    logotype: 'ランク+キャラ',
    attachToolUrl: 'true',
    comment: '',
    attachHashTag: 'true',
  };
  return twdata;
}

function localstorageGetItem(key: string, defaultval: string): string {
  return localStorage.getItem(key) || defaultval;
}

export function string2boolean(booleanStr: string, defaultval: boolean): boolean {
  if (booleanStr.toLowerCase() === String(!defaultval)) {
    return !defaultval;
  }
  return defaultval;
}

export function loadLocalStorage() {
  const twdata: TweetData = TweetDataGetDefault();
  twdata.message = localstorageGetItem('sfvlounge_roommatch.message', '');
  twdata.fightingId = localstorageGetItem('sfvlounge_roommatch.fightingid', '');
  twdata.charactor = localstorageGetItem('sfvlounge_roommatch.charactor', '');
  twdata.lp = localstorageGetItem('sfvlounge_roommatch.lp', '');
  twdata.loungePlayerMax = localstorageGetItem('sfvlounge_roommatch.loungeplayermax', '');
  twdata.loungePlayerPrivate = localstorageGetItem('sfvlounge_roommatch.loungeplayerprivate', '');
  twdata.gameround = localstorageGetItem('sfvlounge_roommatch.gameround', '3ラウンド');
  twdata.gametime = localstorageGetItem('sfvlounge_roommatch.gametime', '99秒');
  twdata.game = localstorageGetItem('sfvlounge_roommatch.game', '1本先取');
  twdata.gameset = localstorageGetItem('sfvlounge_roommatch.gameset', '');
  twdata.charactorSelect = localstorageGetItem('sfvlounge_roommatch.charactorselect', 'OFF');
  twdata.hardware = localstorageGetItem('sfvlounge_roommatch.hardware', '');
  twdata.speedlimit = localstorageGetItem('sfvlounge_roommatch.speedlimit', '');
  twdata.passcode = localstorageGetItem('sfvlounge_roommatch.passcode', '');
  twdata.url = localstorageGetItem('sfvlounge_roommatch.url', '');
  twdata.logotype = localstorageGetItem('sfvlounge_roommatch.logotype', 'ランク+キャラ');
  twdata.attachToolUrl = localstorageGetItem('sfvlounge_roommatch.attachtoolurl', 'true');
  twdata.comment = localstorageGetItem('sfvlounge_roommatch.comment', '');
  twdata.attachHashTag = localstorageGetItem('sfvlounge_roommatch.attachhashtag', 'true');
  return twdata;
}

export function loadColorMode(): ('light' | 'dark') {
  const mode = localstorageGetItem('sfvlounge_roommatch.colormode', 'light');
  return mode === 'dark' ? 'dark' : 'light';
}

export function saveColorMode(mode: ('light' | 'dark')) {
  localStorage.setItem('sfvlounge_roommatch.colormode', mode);
}
