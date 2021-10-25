import React, {useContext, useState} from "react"
import Container from "../Container"
import InputSearch from "./InputSearch";
import Button from "./Button";
import DevFinderContext from "../../context/context";
import {searchUser} from "../../services/user.services";

const Search = () => {
  const [search, setSearch] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(false)
  const {setUser} = useContext(DevFinderContext)

  const handleClick = async () => {
    setBtnDisabled(true)
    const findUser = await searchUser(search)
    setUser(findUser)
    setBtnDisabled(false)
  }

  return (
    <Container>
      <InputSearch
        placeHolder='Search GitHub username_'
        search={search}
        setSearch={setSearch}
      />

      <Button
        text='Search'
        onClick={handleClick}
        disabled={btnDisabled}
      />
    </Container>
  )
}

export default Search