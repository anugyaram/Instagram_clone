import React from 'react'
import Header from '../../components/Header';
import { useEffect,useState } from 'react';
import axios from 'axios';
import UserInfo from '../../components/UserInfo';

const Home = () => {

    const [user,setProfile] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/users/1').then(res => {
            setProfile(res.data);
            console.log(res.data);
        }).catch(error => (console.log(error)))
    },[])
  return (
    <div>
        <Header />
        <UserInfo />
    </div>
  )
}

export default Home;