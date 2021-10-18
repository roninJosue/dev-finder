import React from "react"
import Container from "../Container"
import InputSearch from "./InputSearch";
import Button from "./Button";

const Search = () =>{
  return (
    <Container>
      <InputSearch placeHolder='Search GitHub username_'/>
      <Button text='Search' />
    </Container>
  )
}

export default Search