import React from 'react';
import './Header.css';

const Header = ({image}) => {
  return (
    <div className='navbar'>
        <h2 className='heading'>Instagram</h2>
        <img src={image} alt="user_img" />
    </div>

  )
}

export default Header