import { useState } from 'react';
import { Props, TweetData } from '../types/Defs';
import { saveLocalStorage } from '../api/Utils';
import {
  Box, Button,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle
} from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';

function saveImpl(twdata: TweetData, handleShow: () => void) {
  saveLocalStorage(twdata);
  handleShow();
}

interface SaveButtonDialogProps {
  show: boolean;
  handleClose: () => void;
}

function SaveButtonDialogBox(props: SaveButtonDialogProps) {
  return (<>
    <DialogTitle id='alert-dialog-title'>
      ブラウザにデータ保存
    </DialogTitle>
    <DialogContent>
      <DialogContentText id='alert-dialog-description'>
        保存しました。
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={props.handleClose} autoFocus>
        閉じる
      </Button>
    </DialogActions>
  </>);
}

function SaveButtonDialog(props: SaveButtonDialogProps) {
  return (
    <Dialog
      open={props.show}
      onClose={props.handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box>
        <SaveButtonDialogBox {...props} />
      </Box>
    </Dialog>
  );
}

function SaveButton(props: Props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (<>
    <Button
      variant='contained' color='warning' fullWidth size='large'
      startIcon={<StorageIcon />}
      onClick={() => saveImpl(props.twdata, handleShow)}
    >
      ブラウザにデータ保存
    </Button>
    <SaveButtonDialog show={show} handleClose={handleClose} />
  </>);
}

export default SaveButton;
