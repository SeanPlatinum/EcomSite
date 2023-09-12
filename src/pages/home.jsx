import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
const Home = () => {
  return (
    <>
        <Navbar/>
        <section>
            <Outlet/>
        </section>
    </>
  )
}

export default Home