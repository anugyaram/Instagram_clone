import React from 'react'
import Header from '../../components/Header';
import { useEffect,useState } from 'react';
import UserInfo from '../../components/UserInfo';
import Post from '../../components/Post';
import './Home.css'

import img1 from '../../asset/download.jpg';
import img2 from '../../asset/download1.jpg';
import img3 from '../../asset/download2.jpg';
import img4 from '../../asset/download3.jpg';
import img5 from '../../asset/download4.jpg';
import img6 from '../../asset/download5.jpg';

const Home = () => {

  const [gallery,setGallery] = useState([]);

  useEffect(() => {
      setGallery([img1,img2,img3,img4,img5,img6])
  },[])


  return (
    <div>
        <Header />
        <UserInfo />
        <div className='row'>
          {gallery.map((url,key)=> <Post key={key} url={url} />)}
        </div>
    </div>
  )
}

export default Home;