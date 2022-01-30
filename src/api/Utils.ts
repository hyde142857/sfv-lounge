import { GITHUB_PAGES_URL, GITHUB_REPOS_URL, TweetData } from '../types/Defs';

export function FightingIdIsInvalid(twdata: TweetData) {
  if (twdata.fightingId === "") {
    return true;
  }
  return false;
}

const LpRankList: { [key: string]: number } = {
  "Rookie": 0,
  "Bronze": 500,
  "SuperBronze": 1000,
  "UltraBronze": 1500,
  "Silver": 2000,
  "SuperSilver": 3000,
  "UltraSilver": 3500,
  "Gold": 4000,
  "SuperGold": 5500,
  "UltraGold": 6500,
  "Platinum": 7500,
  "SuperPlatinum": 10000,
  "UltraPlatinum": 12000,
  "Diamond": 14000,
  "SuperDiamond": 20000,
  "UltraDiamond": 25000,
  "Master": 30000,
  "GrandMaster": 35000,
  "UltimateGrandMaster": 100000,
  "Warload": 300000,
};

export function GetLpRank(lp: string) {
  let rank = "";
  if (!lp.match(/^\d+$/)) {
    return "";
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
  if (message !== "") {
    return message + "\n\n";
  }
  return "";
}

function GetTweetTextCharactor(charactor: string) {
  if (charactor !== "") {
    return "【キャラ】" + charactor + "\n";
  }
  return "";
}

function GetTweetTextLp(lp: string) {
  if (lp !== "") {
    let str: string[] = [];
    str.push("【LP】" + lp);
    if (GetLpRank(lp) !== "") {
      str.push("[" + GetLpRank(lp) + "]");
    }
    return str.join(" ") + "\n";
  }
  return "";
}

function GetTweetTextGame(gameround: string, gametime: string) {
  if (gameround !== "3ラウンド" || gametime !== "99秒") {
    return "【ラウンド】" + gameround + " " + gametime + "\n";
  }
  return "";
}

function GetTweetTextPasscode(passcode: string) {
  let twtext = "【パス】";
  if (passcode === "") {
    twtext += "なし\n";
  } else {
    twtext += passcode + "\n";
  }
  return twtext;
}

function GetTweetTextComment(comment: string) {
  if (comment !== "") {
    return "【コメント】" + comment + "\n";
  }
  return "";
}

function GetTweetTextPleyerMax(playermax: string, playerprivate: string) {
  let text = "";
  if (playermax !== "") {
    text = "【部屋人数】" + playermax + "人";
    if (playerprivate !== "") {
      text += " 内プライベート" + playerprivate + "人";
    }
    return text + "\n";
  }
  return "";
}

export function GetTweetText(twdata: TweetData) {
  let twtext = "";
  twtext += GetTweetTextMessage(twdata.message);
  twtext += "【ID】" + twdata.fightingId + "\n";
  twtext += GetTweetTextCharactor(twdata.charactor);
  twtext += GetTweetTextLp(twdata.lp);
  twtext += GetTweetTextGame(twdata.gameround, twdata.gametime);
  twtext += GetTweetTextPleyerMax(twdata.loungePlayerMax, twdata.loungePlayerPrivate);
  twtext += "【連戦】" + twdata.game + twdata.gameset + "\n";
  twtext += "【キャラセレ】" + twdata.charactorSelect + "\n";
  twtext += "【ハード】" + twdata.hardware + "\n";
  twtext += "【通信制限】" + twdata.speedlimit + "\n";
  twtext += GetTweetTextPasscode(twdata.passcode);
  twtext += GetTweetTextComment(twdata.comment);
  twtext += "#ストVラウンジ募集\n";
  return (twtext);
}

export function GetUrl(twdata: TweetData) {
  if (twdata.url !== "") {
    return twdata.url;
  }
  if (string2boolean(twdata.attachToolUrl, true)) {
    return GITHUB_PAGES_URL;
  }
  return "";
}

export function submitTweet(twdata: TweetData) {
  const twdata_uri = encodeURIComponent(GetTweetText(twdata));
  const url = GetUrl(twdata);
  let openurl = "https://twitter.com/intent/tweet?text=" + twdata_uri;
  if (url !== "") {
    openurl += "&url=" + url;
  }
  window.open(openurl, "_blank");
}

export function launchTwitterLive() {
  window.open("https://twitter.com/hashtag/%E3%82%B9%E3%83%88V%E3%83%A9%E3%82%A6%E3%83%B3%E3%82%B8%E5%8B%9F%E9%9B%86?src=hashtag_click&f=live", "_blank");
}

export function launchNewIssue() {
  const text_uri = encodeURIComponent("スト5ラウンジ募集ツール(@hyde142857)\n▽▽▽ 要望などを記載ください。 ▽▽▽\n");
  window.open("https://twitter.com/intent/tweet?text=" + text_uri, "_blank");
}

export function launchGithub() {
  window.open(GITHUB_REPOS_URL, "_blank");
}

export function copyClipboard(twdata: TweetData, hundleShow: () => void) {
  const text = GetTweetText(twdata) + GetUrl(twdata);

  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      hundleShow();
    });
  }
}
function saveLocalStorageTweettext(twdata: TweetData) {
  localStorage.setItem('sfvlounge_roommatch.message', twdata.message);
  localStorage.setItem('sfvlounge_roommatch.url', twdata.url);
  localStorage.setItem('sfvlounge_roommatch.attachtoolurl', String(twdata.attachToolUrl));
  localStorage.setItem('sfvlounge_roommatch.comment', twdata.comment);
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
    message: "",
    fightingId: "",
    charactor: "",
    lp: "",
    loungePlayerMax: "",
    loungePlayerPrivate: "",
    gameround: "3ラウンド",
    gametime: "99秒",
    game: "1本先取",
    gameset: "",
    charactorSelect: "OFF",
    hardware: "どっちもOK",
    speedlimit: "OFF",
    passcode: "",
    url: "",
    attachToolUrl: "true",
    comment: "",
  };
  return twdata;
}

function localstorageGetItem(key: string, defaultval: string):string {
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
  twdata.message = localstorageGetItem('sfvlounge_roommatch.message', "");
  twdata.fightingId = localstorageGetItem('sfvlounge_roommatch.fightingid', "");
  twdata.charactor = localstorageGetItem('sfvlounge_roommatch.charactor', "");
  twdata.lp = localstorageGetItem('sfvlounge_roommatch.lp', "");
  twdata.loungePlayerMax = localstorageGetItem('sfvlounge_roommatch.loungeplayermax', "");
  twdata.loungePlayerPrivate = localstorageGetItem('sfvlounge_roommatch.loungeplayerprivate', "");
  twdata.gameround = localstorageGetItem('sfvlounge_roommatch.gameround', "3ラウンド");
  twdata.gametime = localstorageGetItem('sfvlounge_roommatch.gametime', "99秒");
  twdata.game = localstorageGetItem('sfvlounge_roommatch.game', "1本先取");
  twdata.gameset = localstorageGetItem('sfvlounge_roommatch.gameset', "");
  twdata.charactorSelect = localstorageGetItem('sfvlounge_roommatch.charactorselect', "OFF");
  twdata.hardware = localstorageGetItem('sfvlounge_roommatch.hardware', "どっちもOK");
  twdata.speedlimit = localstorageGetItem('sfvlounge_roommatch.speedlimit', "OFF");
  twdata.passcode = localstorageGetItem('sfvlounge_roommatch.passcode', "");
  twdata.url = localstorageGetItem('sfvlounge_roommatch.url', "");
  twdata.attachToolUrl = localstorageGetItem('sfvlounge_roommatch.attachtoolurl', "true");
  twdata.comment = localstorageGetItem('sfvlounge_roommatch.comment', "");
  return twdata;
}
