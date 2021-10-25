const GITHUBAPI = 'https://api.github.com/users/'

export const searchUser = async (search) => {
  let userFind = {}
  await fetch(`${GITHUBAPI}${search}`)
    .then(response => response.json())
    .then(user => {
      const {login} = user
      userFind = login ? user : {}
    })

  return userFind
}
