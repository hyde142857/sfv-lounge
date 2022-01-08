import { fireEvent, render, screen } from '@testing-library/react';
import { TweetButton } from '.';
import * as Utils from '../api/Utils';

test('click TweetButton',() => {
  const twdata = Utils.TweetDataGetDefault();
  window.open = jest.fn();

  render(<TweetButton twdata={twdata} />);

  const spy1 = jest.spyOn(Utils,'submitTweet');
  fireEvent.click(screen.getAllByRole('button')[0]);
  expect(spy1).toHaveBeenCalled();
});
