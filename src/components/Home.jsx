// import logo from './logo.svg';
import Banner from "./layouts/Banner"
import Upcomming from "./layouts/Upcomming"
import Featured from "./layouts/Featured"
import Almuni from './layouts/Almuni'
import { useState } from "react"



function Home(props) {

  return (
      <div>
 

        <Banner></Banner>
        <Upcomming></Upcomming>   
        <Featured></Featured>  
        <Almuni></Almuni>
      </div>
 
  );
}
export default Home;
