import './index.css'
import { useState } from 'react'
import SignForm from "../../components/SignForm"
import RegisterForm from "../../components/RegisterForm"
import { Button } from "antd"

export default function Home() {
  const [ login, setLogin ] = useState(true)

  function toggleLogin(){
    setLogin(!login)
  }

  return (
    <div className="container">
      {login ? 
        <div className='form'>
          <SignForm />
          <div className='content'>
            <p>
              Não tem conta?
            </p>
            <Button type='link' onClick={() => {toggleLogin()}}>Registre-se aqui.</Button>
          </div>
        </div>
      :
        <div className='form'>
          <RegisterForm />
          <div className='content'>
            <p>
              Já tem conta?
            </p>
            <Button type='link' onClick={() => {toggleLogin()}}>Faça seu login.</Button>
          </div>
        </div>
      }
    </div>
  )
}