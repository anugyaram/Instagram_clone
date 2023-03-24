import React, { useState } from 'react'
import ModalImg from './ModalImg';
import './Post.css';

const Post = ({url}) => {
    
    const [modal,setModalShow] = useState(false);

    const handleClose = () => setModalShow(false);
    const handleShow = () => setModalShow(true);

  return (
    <div className='post col-4'>
        <img src={url} alt='posts' onClick={handleShow} className='post-img'/>
        <ModalImg url={url} show={modal} onHide={handleClose} />
    </div>
  )
}

export default Post