import { fireEvent, render, screen } from '@testing-library/react';
import { CheckTweetBotButton } from '.';
import * as Utils from '../api/Utils';

test('click CheckLive',() => {
  window.open = jest.fn();

  render(<CheckTweetBotButton />);

  const spy1 = jest.spyOn(Utils,'launchTwitterBot');
  fireEvent.click(screen.getAllByRole('button')[0]);
  expect(spy1).toHaveBeenCalled();
});
