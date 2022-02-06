import { fireEvent, render, screen } from '@testing-library/react';
import TweetFormPage from './TweetFormPage';

test('form test', () => {
  render(<TweetFormPage />);
  fireEvent.change(
    screen.getByLabelText('Fighter\'s ID'),
    { target: { value: 'hogehoge' } }
  );
  expect(
    screen.getByLabelText('Fighter\'s ID')
  ).toHaveValue('hogehoge');
});
