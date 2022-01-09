import { fireEvent, render, screen } from '@testing-library/react';
import * as Utils from '../api/Utils';
import ClipboardButton from './ClipboardButton';

test('click Clipboard',() => {
  const twdata = Utils.TweetDataGetDefault();
  window.open = jest.fn();

  render(<ClipboardButton twdata={twdata} />);

  const spy1 = jest.spyOn(Utils,'copyClipboard');
  fireEvent.click(screen.getAllByRole('button')[0]);
  expect(spy1).toHaveBeenCalled();
});
