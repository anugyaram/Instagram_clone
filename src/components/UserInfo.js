import React from 'react';
import './UserInfo.css';
import { useEffect,useState } from 'react';
import axios from "axios";
import dp from '../asset/download.jpg';

const UserInfo = () => {
  const [info,setInfo] = useState([]);

  useEffect(() =>{
    axios.get('https://dummyjson.com/users/1').then(res =>{
      setInfo(res.data);
    }).catch((error) => (console.log(error)))
  })

  return (
    <div className='user-info'>
      <div className='image-area'>
        <img src={dp} alt="user image" className='user-img'/>
      </div>
      <div className='info-area'>
        <h2>{info.firstName}_{info.lastName}</h2>
        <div className='follow-info'>
          <p><b>{info.height}k</b> Followers</p>
          <p><b>{info.weight}k</b> Followings</p>
          <p><b>{info.age}</b> Posts</p>
        </div>
        <h4>{info.email}</h4>
        <p>Just a quote</p>
      </div>
    </div>
  )
}

export default UserInfo