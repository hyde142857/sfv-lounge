import { fireEvent, render, screen } from '@testing-library/react';
import { TitleBar } from '.';

test('TitleBar click colormode change', () => {
  let shareSpy = jest.fn();
  navigator.share = shareSpy;
  let onClickColorModeSpy = jest.fn();

  render(<TitleBar
    palettemode='light'
    onClickColorMode={onClickColorModeSpy}
  />);

  fireEvent.click(screen.getAllByRole('button')[0]);
  expect(shareSpy).toHaveBeenCalled();
  expect(onClickColorModeSpy).toBeCalledTimes(0);
});

test('TitleBar click share', () => {
  let shareSpy = jest.fn();
  navigator.share = shareSpy;
  let onClickColorModeSpy = jest.fn();

  render(<TitleBar
    palettemode='light'
    onClickColorMode={onClickColorModeSpy}
  />);

  fireEvent.click(screen.getAllByRole('button')[1]);
  expect(shareSpy).toBeCalledTimes(0);
  expect(onClickColorModeSpy).toHaveBeenCalled();
});

