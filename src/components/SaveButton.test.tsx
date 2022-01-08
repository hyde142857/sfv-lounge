import { fireEvent, render, screen } from '@testing-library/react';
import { SaveButton } from '.';
import * as Utils from '../api/Utils';

test('click SaveButton',() => {
  const twdata = Utils.TweetDataGetDefault();
  window.open = jest.fn();

  render(<SaveButton twdata={twdata} />);

  const spy1 = jest.spyOn(Utils,'saveLocalStorage');
  fireEvent.click(screen.getAllByRole('button')[0]);
  expect(spy1).toHaveBeenCalled();
});
