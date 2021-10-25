import React from "react"
import Container from "../../Container";

const UserNotFound = ({user}) => {
  const message = showMessage(user)

  return(
    <Container classes={['dev-not-found']}>
      <h1 className='dev-header__title'>{message}</h1>
    </Container>
  )
}

const showMessage = (user) => {
  if (!user) {
    return 'Please type the user name of the dev you are looking for'
  }

  return Object.keys(user).length === 0 ? 'Dev Not Found :(' : ''
}

export default UserNotFound