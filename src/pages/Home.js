import React from 'react';
import Navbar from "../components/Navbar";
import Anouncemt from '../components/Anouncemt';
import Slider from '../components/Slider';
import Categories from '../components/Categories';
const Home = () => {
  return (
    <div>
     <Anouncemt />
     <Navbar/>
     <Slider />
     <Categories />
    </div>
  );
};
export default Home;
