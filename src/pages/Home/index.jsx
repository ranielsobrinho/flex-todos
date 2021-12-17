import Api from "../../services/Api"
import { useEffect, useState } from 'react'

export default function Home() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    Api.get('/users')
      .then(({ data }) => {
        setUsers(data.data)
        console.log(users)
      })
      .catch(error => console.log(error))
  })

  return (
    <h1>Hello world home</h1>
  )
}