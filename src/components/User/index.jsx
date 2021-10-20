import React from "react";
import Container from "../Container";
import Info from "./components/Info";
import Statistics from "./components/Statistics";
import Contact from "./components/Contact";

const User = () =>{
  return (
    <Container>
      <div className='user'>
        <Info />
        <Statistics />
        <Contact />
      </div>
    </Container>
  )
}

export default User