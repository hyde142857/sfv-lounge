import { GITHUB_PAGES_URL } from "../types/Defs";
import {
  FightingIdIsInvalid, GetLpRank, TweetDataGetDefault, GetUrl
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
