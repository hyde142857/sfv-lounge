import { fireEvent, render, screen, within } from '@testing-library/react';
import { TwdataformSelect } from '.';
import * as Utils from '../api/Utils';
import { TweetData } from '../types/Defs';

test('add new select', () => {
  const twdata = Utils.TweetDataGetDefault();
  window.open = jest.fn();
  twdata.charactor = '';
  const updateTwdata = (key: keyof TweetData, val: string) => {
    twdata[key] = val;
  };
  render(<TwdataformSelect
    label='label'
    options={['リュウ', 'ケン', '豪鬼']}
    twdataKey='charactor'
    twdata={twdata} updateTwdata={updateTwdata}
  />);
  fireEvent.mouseDown(screen.getByRole('button'));
  const listbox = within(screen.getByRole('listbox'));
  fireEvent.click(listbox.getByText(/豪鬼/i));
  expect(
    twdata['charactor']
  ).toEqual('豪鬼');
});

test('switch select', () => {
  const twdata = Utils.TweetDataGetDefault();
  window.open = jest.fn();
  twdata.charactor = 'リュウ';
  const updateTwdata = (key: keyof TweetData, val: string) => {
    twdata[key] = val;
  };
  render(<TwdataformSelect
    label='label'
    options={['リュウ', 'ケン', '豪鬼']}
    twdataKey='charactor'
    twdata={twdata} updateTwdata={updateTwdata}
  />);
  fireEvent.mouseDown(screen.getByRole('button'));
  const listbox = within(screen.getByRole('listbox'));
  fireEvent.click(listbox.getByText(/豪鬼/i));
  expect(
    twdata['charactor']
  ).toEqual('豪鬼');
});
