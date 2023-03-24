import React from 'react';
import { Modal } from 'react-bootstrap';
import './ModalImg.css';

const ModalImg = (props) => {

  return (
    <Modal
    {...props}
    size = "lg"
    centered
    className='modal'
    >
      <Modal.Body>
        <img src={props.url} alt="img" className='modal-img' />
      </Modal.Body>
    </Modal>
  )
}

export default ModalImg