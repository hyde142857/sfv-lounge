import { fireEvent, render, screen } from '@testing-library/react';
import { TwdataformTextarea } from '.';
import * as Utils from '../api/Utils';
import { TweetData } from '../types/Defs';

test('form test', () => {
  const twdata = Utils.TweetDataGetDefault();
  const updateTwdata = (key: keyof TweetData, val: string) => {
    twdata[key] = val;
  };
  render(<TwdataformTextarea
    twdata={twdata} twdataKey='comment' label='comment'
    updateTwdata={updateTwdata}
  />);
  fireEvent.change(
    screen.getByLabelText('comment'),
    { target: { value: '1000\n10000' } }
  );
  expect(
    twdata.comment
  ).toEqual('1000\n10000');
});
