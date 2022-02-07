import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import * as Utils from '../api/Utils';
import ClipboardButton from './ClipboardButton';

test('click Clipboard', async () => {
  const twdata = Utils.TweetDataGetDefault();
  let cliptext = '';
  Object.assign(navigator, {
    clipboard: {
      writeText(data: string) {
        cliptext = data;
        return Promise.resolve();
      },
    },
  });
  render(<ClipboardButton twdata={twdata} />);

  fireEvent.click(
    screen.getAllByRole('button')[0]
  );
  await waitFor(() => {
    expect(cliptext).not.toEqual('');
  });
});
