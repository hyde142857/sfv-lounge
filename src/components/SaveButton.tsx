import { useState } from 'react';
import { Props, TweetData } from '../types/Defs';
import { saveLocalStorage } from '../api/Utils';
import { createButton,createSvgIcon } from 'react-social-login-buttons';
import { Modal, Button } from 'react-bootstrap';

function saveImpl(twdata: TweetData, handleShow:() => void) {
  saveLocalStorage(twdata);
  handleShow();
}

function getSvgIcon() {
  return (
    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="database"
      className="svg-inline--fa fa-database fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path fill="currentColor" d="M448 73.143v45.714C448 159.143 347.667 192 224 192S0 159.143 0 118.857V73.143C0 32.857 100.333 0 224 0s224 32.857 224 73.143zM448 176v102.857C448 319.143 347.667 352 224 352S0 319.143 0 278.857V176c48.125 33.143 136.208 48.572 224 48.572S399.874 209.143 448 176zm0 160v102.857C448 479.143 347.667 512 224 512S0 479.143 0 438.857V336c48.125 33.143 136.208 48.572 224 48.572S399.874 369.143 448 336z"></path>
    </svg>
  );
}

const ButtonComp = createButton(
  {
    text: "ブラウザにデータを保存",
    icon: createSvgIcon(getSvgIcon),
    style: { background: "#f9ae32" },
    activeStyle: { background: "#ff9f23" }
  }
);


function SaveButton(props: Props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (<>
    <ButtonComp onClick={() => saveImpl(props.twdata, handleShow)} />
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>ブラウザにデータ保存</Modal.Title>
      </Modal.Header>
      <Modal.Body>保存しました。</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  </>);
}

export default SaveButton;
