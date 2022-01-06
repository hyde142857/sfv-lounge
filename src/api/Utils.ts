import { GITHUB_PAGES_URL, GITHUB_REPOS_URL, TweetData } from '../types/Defs'

export function FightingIdIsInvalid(twdata: TweetData) {
  if (twdata.fightingId === "") {
    return true;
  }
  return false;
}

export function GetLpRank(lp: string) {
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

export function submitTweet(twdata:TweetData){
  const twdata_uri = encodeURIComponent(GetTweetText(twdata));
  let url = GITHUB_PAGES_URL;
  if ( twdata.url !== ""){
    url = twdata.url;
  }
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
