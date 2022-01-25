import { useState } from 'react';
import { Props } from '../types/Defs';
import { copyClipboard } from '../api/Utils';
import { createButton,createSvgIcon } from 'react-social-login-buttons';
import { Modal, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';

function Icon() {
  return (
    <FontAwesomeIcon icon={faCopy} width={24} height={24} />
  );
}

const ButtonComp = createButton(
  {
    text: "クリップボードにコピー",
    icon: createSvgIcon(Icon),
    style: { background: "#3b5998" },
    activeStyle: { background: "#293e69" }
  }
);

function ClipboardButton(props: Props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <ButtonComp onClick={() => copyClipboard(props.twdata, handleShow)} />
      <span>LINEやDiscordから募集する際、活用ください。</span>
      <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">クリップボードにコピー</Modal.Title>
        </Modal.Header>
        <Modal.Body>クリップボードにコピーしました。ペーストしてご利用ください。</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ClipboardButton;
