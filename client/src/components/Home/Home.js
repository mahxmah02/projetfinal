import React from 'react'
import "./Home.css"
import Navbar from '../Navbar/Navbar'

const Home = () => {
  return (
    <div className='cadre-page'>
<Navbar />
<div className='bann'>
  <img src='./images/bann.jpg' />
</div>
    </div>
  )
}

export default Home
