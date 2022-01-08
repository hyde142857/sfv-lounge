import { fireEvent, render, screen } from '@testing-library/react';
import { RequestButton } from '.';
import * as Utils from '../api/Utils';

test('click RequestButton GithubIssue',() => {
  window.open = jest.fn();
  render(<RequestButton />);

  const spy1 = jest.spyOn(Utils,'launchNewIssue');
  const spy2 = jest.spyOn(Utils,'launchGithub');
  fireEvent.click(screen.getAllByRole('button')[0]);
  expect(spy1).toHaveBeenCalled();
  expect(spy2).toHaveBeenCalledTimes(0);
});

test('click RequestButton GithubTop',() => {
  window.open = jest.fn();
  render(<RequestButton />);

  const spy1 = jest.spyOn(Utils,'launchNewIssue');
  const spy2 = jest.spyOn(Utils,'launchGithub');
  fireEvent.click(screen.getAllByRole('button')[1]);
  expect(spy1).toHaveBeenCalledTimes(0);
  expect(spy2).toHaveBeenCalled();
});
