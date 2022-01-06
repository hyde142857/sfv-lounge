import { Button } from 'react-bootstrap';
import { Props } from '../types/Defs';
import { saveLocalStorage } from '../api/Utils';

function SaveButton(props: Props) {
  return (
    <div className="d-grid gap-2">
      <Button variant="warning" size="lg" onClick={() => saveLocalStorage(props.twdata)}>
        ブラウザにデータを保存
      </Button>
    </div>
  );
}

export default SaveButton;
