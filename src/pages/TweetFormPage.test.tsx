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

  fireEvent.change(
    screen.getByLabelText('LP'),
    { target: { value: '1000' } }
  );
  expect(
    screen.getByLabelText('LP'),
  ).toHaveValue('1000');

  fireEvent.change(
    screen.getByLabelText('パス'),
    { target: { value: '9999' } }
  );
  expect(
    screen.getByLabelText('パス'),
  ).toHaveValue('9999');

  fireEvent.change(
    screen.getByLabelText('URL'),
    { target: { value: 'https://www.google.com' } }
  );
  expect(
    screen.getByLabelText('URL'),
  ).toHaveValue('https://www.google.com');

  fireEvent.change(
    screen.getByLabelText('先頭メッセージ'),
    { target: { value: 'hogehoge2' } }
  );
  expect(
    screen.getByLabelText('先頭メッセージ'),
  ).toHaveValue('hogehoge2');

  fireEvent.change(
    screen.getByLabelText('コメント'),
    { target: { value: 'hogehoge3' } }
  );
  expect(
    screen.getByLabelText('コメント'),
  ).toHaveValue('hogehoge3');

});
