import { GITHUB_PAGES_URL, GITHUB_REPOS_URL, TweetData } from '../types/Defs';

export function FightingIdIsInvalid(twdata: TweetData) {
  if (twdata.fightingId === "") {
    return true;
  }
  return false;
}

const LpRankList: { [key: string]: number } = {
  "[Rookie]": 0,
  "[Bronze]": 500,
  "[SuperBronze]": 1000,
  "[UltraBronze]": 1500,
  "[Silver]": 2000,
  "[SuperSilver]": 3000,
  "[UltraSilver]": 3500,
  "[Gold]": 4000,
  "[SuperGold]": 5500,
  "[UltraGold]": 6500,
  "[Platinum]": 7500,
  "[SuperPlatinum]": 10000,
  "[UltraPlatinum]": 12000,
  "[Diamond]": 14000,
  "[SuperDiamond]": 20000,
  "[UltraDiamond]": 25000,
  "[Master]": 30000,
  "[GrandMaster]": 35000,
  "[UltraGrandMaster]": 100000,
  "[Warload]": 300000,
};

export function GetLpRank(lp: string) {
  let rank = "";
  if (!lp.match(/^\d+$/)) {
    return "";
  }
  const lpnum = Number(lp);
  for (let k in LpRankList) {
    if (LpRankList[k] <= lpnum) {
      rank = k;
    }
  }
  return rank;
}

export function GetTweetText(twdata: TweetData) {
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

export function GetUrl(twdata:TweetData){
  let url = GITHUB_PAGES_URL;
  if ( twdata.url !== ""){
    url = twdata.url;
  }
  return url;
}

export function submitTweet(twdata:TweetData){
  const twdata_uri = encodeURIComponent(GetTweetText(twdata));
  let url = GetUrl(twdata);
  window.open("https://twitter.com/intent/tweet?text=" + twdata_uri + "&url=" + url, "_blank");
}

export function launchTwitterLive() {
  window.open( "https://twitter.com/hashtag/%E3%82%B9%E3%83%88V%E3%83%A9%E3%82%A6%E3%83%B3%E3%82%B8%E5%8B%9F%E9%9B%86?src=hashtag_click&f=live", "_blank");
}

export function launchNewIssue(twdata: TweetData) {
  window.open( GITHUB_REPOS_URL + "/issues", "_blank");
}

export function launchGithub(twdata: TweetData) {
  window.open( GITHUB_REPOS_URL, "_blank");
}

export function saveLocalStorage(twdata:TweetData){
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

export function loadLocalStorage() {
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
