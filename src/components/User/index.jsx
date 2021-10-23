import React,{useContext} from "react";
import Container from "../Container";
import Info from "./components/Info";
import Statistics from "./components/Statistics";
import Contact from "./components/Contact";
import DevFinderContext from "../../context/context";

const User = () =>{
  const {user: {
    name,
    login,
    avatar_url,
    created_at,
    bio,
    location,
    blog,
    followers,
    following,
    twitter_username,
    company,
    public_repos: repos
  }} = useContext(DevFinderContext)
  return (
    <Container>
      <div className='user'>
        <Info
          avatar_url={avatar_url}
          name={name}
          login={login}
          created_at={created_at}
          bio={bio}
        />
        <Statistics
          followers={followers}
          following={following}
          repos={repos}
        />
        <Contact
          location={location}
          blog={blog}
          twitter_username={twitter_username}
          company={company}
        />
      </div>
    </Container>
  )
}

export default User