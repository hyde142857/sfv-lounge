import { fireEvent, render, screen } from '@testing-library/react';
import { CheckLiveTweetButton } from '.';
import * as Utils from '../api/Utils';

test('click CheckLive',() => {
  window.open = jest.fn();

  render(<CheckLiveTweetButton />);

  const spy1 = jest.spyOn(Utils,'launchTwitterLive');
  fireEvent.click(screen.getAllByRole('button')[0]);
  expect(spy1).toHaveBeenCalled();
});
