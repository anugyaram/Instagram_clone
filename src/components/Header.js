import React from 'react';
import './Header.css';
import dp from '../asset/download.jpg';

const Header = ({image}) => {
  return (
    <div className='navbar'>
        <h2 className='heading'>Instagram</h2>
        <img src={dp} alt="user_img" className='dp' />
    </div>

  )
}

export default Header