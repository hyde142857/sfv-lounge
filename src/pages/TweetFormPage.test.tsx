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
    screen.getByLabelText('ラウンド'),
    { target: { value: '1ラウンド' } }
  );
  expect(
    screen.getByLabelText('ラウンド'),
  ).toHaveValue('1ラウンド');

  fireEvent.change(
    screen.getByLabelText('タイム'),
    { target: { value: '60秒' } }
  );
  expect(
    screen.getByLabelText('タイム'),
  ).toHaveValue('60秒');

  fireEvent.change(
    screen.getByLabelText('連戦設定'),
    { target: { value: '10本先取' } }
  );
  expect(
    screen.getByLabelText('連戦設定'),
  ).toHaveValue('10本先取');

  fireEvent.change(
    screen.getByLabelText('セット'),
    { target: { value: 'x5' } }
  );
  expect(
    screen.getByLabelText('セット'),
  ).toHaveValue('x5');

  fireEvent.change(
    screen.getByLabelText('キャラセレ'),
    { target: { value: 'ON' } }
  );
  expect(
    screen.getByLabelText('キャラセレ'),
  ).toHaveValue('ON');

  fireEvent.change(
    screen.getByLabelText('ハード'),
    { target: { value: 'PCのみ' } }
  );
  expect(
    screen.getByLabelText('ハード'),
  ).toHaveValue('PCのみ');

  fireEvent.change(
    screen.getByLabelText('通信制限'),
    { target: { value: 'ON' } }
  );
  expect(
    screen.getByLabelText('通信制限'),
  ).toHaveValue('ON');

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
