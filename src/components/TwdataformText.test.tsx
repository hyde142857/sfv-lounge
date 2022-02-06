import { fireEvent, render, screen } from '@testing-library/react';
import { TwdataformText } from '.';
import * as Utils from '../api/Utils';
import { TweetData } from '../types/Defs';

test('form test', () => {
  const twdata = Utils.TweetDataGetDefault();
  const updateTwdata = (key: keyof TweetData, val: string) => {
    twdata[key] = val;
  };
  render(<TwdataformText
    twdata={twdata} twdataKey='lp' label='LP'
    updateTwdata={updateTwdata}
  />);
  fireEvent.change(
    screen.getByLabelText('LP'),
    { target: { value: '1000' } }
  );
  expect(
    twdata.lp
  ).toEqual('1000');
});
