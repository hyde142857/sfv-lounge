import { useState } from 'react';
import { Props, TweetData } from '../types/Defs';
import { saveLocalStorage } from '../api/Utils';
import { createButton,createSvgIcon } from 'react-social-login-buttons';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

function saveImpl(twdata: TweetData, handleShow:() => void) {
  saveLocalStorage(twdata);
  handleShow();
}

function Icon() {
  return (
    <FontAwesomeIcon icon={faDatabase} width={24} height={24} />
  );
}

const ButtonComp = createButton(
  {
    text: "ブラウザにデータを保存",
    icon: createSvgIcon(Icon),
    style: { background: "#f9ae32" },
    activeStyle: { background: "#ff9f23" }
  }
);


function SaveButton(props: Props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ButtonComp onClick={() => saveImpl(props.twdata, handleShow)} />
      <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">ブラウザにデータ保存</Modal.Title>
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
