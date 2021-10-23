import {useState} from "react"

const useApp = () => {
  const [user, setUser] = useState(null)

  return {
    user,
    setUser
  }
}

export default useApp