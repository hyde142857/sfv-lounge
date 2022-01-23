export const GITHUB_REPOS_URL = 'https://github.com/hyde142857/sfv-lounge';
export const GITHUB_PAGES_URL = 'https://hyde142857.github.io/sfv-lounge';

export interface TweetData {
  message: string;
  fightingId: string;
  charactor: string;
  lp: string;
  loungePlayerMax: string;
  loungePlayerPrivate: string;
  gameround: string;
  gametime: string;
  game: string;
  gameset: string;
  charactorSelect: string;
  hardware: string;
  speedlimit: string;
  passcode: string;
  url: string;
  attachToolUrl: boolean;
  comment: string;
}

export type Props = {
  twdata: TweetData;
}

export {};