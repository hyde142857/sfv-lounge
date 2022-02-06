import { fireEvent, render, screen, within } from '@testing-library/react';
import { TwdataformSelectMulti } from '.';
import * as Utils from '../api/Utils';
import { TweetData } from '../types/Defs';

test('add new select', () => {
  const twdata = Utils.TweetDataGetDefault();
  window.open = jest.fn();
  twdata.charactor = '';
  const updateTwdata = (key: keyof TweetData, val: string) => {
    twdata[key] = val;
  };
  render(<TwdataformSelectMulti
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

test('add select', () => {
  const twdata = Utils.TweetDataGetDefault();
  window.open = jest.fn();
  twdata.charactor = 'リュウ';
  const updateTwdata = (key: keyof TweetData, val: string) => {
    twdata[key] = val;
  };
  render(<TwdataformSelectMulti
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
  ).toEqual('リュウ 豪鬼');
});

test('remove select', () => {
  const twdata = Utils.TweetDataGetDefault();
  window.open = jest.fn();
  twdata.charactor = '豪鬼';
  const updateTwdata = (key: keyof TweetData, val: string) => {
    twdata[key] = val;
  };
  render(<TwdataformSelectMulti
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
  ).toEqual('');
});

test('remove all select', () => {
  const twdata = Utils.TweetDataGetDefault();
  window.open = jest.fn();
  twdata.charactor = 'リュウ ケン 豪鬼';
  const updateTwdata = (key: keyof TweetData, val: string) => {
    twdata[key] = val;
  };
  render(<TwdataformSelectMulti
    label='label'
    options={['リュウ', 'ケン', '豪鬼']}
    twdataKey='charactor'
    twdata={twdata} updateTwdata={updateTwdata}
  />);
  fireEvent.mouseDown(screen.getByRole('button'));
  const listbox = within(screen.getByRole('listbox'));
  fireEvent.click(listbox.getByText('選択なし'));
  expect(
    twdata['charactor']
  ).toEqual('');
});
