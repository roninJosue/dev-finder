import React from "react"
import Container from "../Container"
import InputSearch from "./InputSearch";

const Search = () =>{
  return (
    <Container>
      <InputSearch placeHolder='Search GitHub username_'/>
      <button>Search</button>
    </Container>
  )
}

export default Search