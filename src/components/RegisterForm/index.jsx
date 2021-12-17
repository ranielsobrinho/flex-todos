import React from 'react'
import { useForm } from 'react-hook-form'
import { Button } from 'antd'
import './index.css'
import Api from '../../services/Api'

export default function RegisterForm() {
  const { register, handleSubmit } = useForm()

  const submit = data => {
    Api.post('/users', data)
      .then((res) => {
        alert('Cadastro feito com sucesso. Faça o login para continuar.')
      })
      .catch(error => console.log(error))
  }
  return (
    <div className='form-container'>
      <h2>Registrar</h2>
      <form onSubmit={handleSubmit(submit)} className='register-form'>
        <input name='name' type='text' {...register('name')} placeholder='Name'/>
        <input name='username' type='text' {...register('username')} placeholder='Username'/>
        <input name='email' type='email' {...register('email')} placeholder='Email'/>
        <input name='password' type='password' {...register('password')} placeholder='Password'/>
        <Button type='primary' htmlType='submit'>Registrar</Button>
      </form>
    </div>
  )
}
