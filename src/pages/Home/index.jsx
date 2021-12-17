import Api from "../../services/Api"
import './index.css'
import { useEffect, useState } from 'react'
import SignForm from "../../components/SignForm"

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
    <div className="container">
      <SignForm />
    </div>
  )
}