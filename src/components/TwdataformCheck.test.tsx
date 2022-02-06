import { fireEvent, render, screen } from '@testing-library/react';
import { TwdataformCheck } from '.';
import * as Utils from '../api/Utils';
import { TweetData } from '../types/Defs';

test('on2off', () => {
  const twdata = Utils.TweetDataGetDefault();
  window.open = jest.fn();
  twdata.attachToolUrl = 'true';
  const updateTwdata = (key: keyof TweetData, val: string) => {
    twdata[key] = val;
  };
  render(<TwdataformCheck
    label='label'
    twdataKey='attachToolUrl'
    twdata={twdata} updateTwdata={updateTwdata}
  />);
  fireEvent.click(screen.getByRole('checkbox'));
  expect(
    twdata.attachToolUrl
  ).toEqual('false');
});

test('off2on', () => {
  const twdata = Utils.TweetDataGetDefault();
  window.open = jest.fn();
  twdata.attachToolUrl = 'false';
  const updateTwdata = (key: keyof TweetData, val: string) => {
    twdata[key] = val;
  };
  render(<TwdataformCheck
    label='label'
    twdataKey='attachToolUrl'
    twdata={twdata} updateTwdata={updateTwdata}
  />);
  fireEvent.click(screen.getByRole('checkbox'));
  expect(
    twdata.attachToolUrl
  ).toEqual('true');
});
