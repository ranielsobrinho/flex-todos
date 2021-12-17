import { Button } from 'antd'
import './index.css'
import { useForm } from 'react-hook-form'
import Api from '../../services/Api'

export default function SignForm() {
  const { register, handleSubmit } = useForm()

  const submit = data => {
    console.log(data)
    Api.post('/auth', data)
      .then(({data}) => {
        console.log(data)
        sessionStorage.setItem('token', data.token)
        sessionStorage.setItem('userId', data.userId)
        
      })
      .catch(error => console.log(error))
  }
  return (
    <div className='form-container'>
      <h2>Entrar</h2>
      <form onSubmit={handleSubmit(submit)} className='sign-in-form'>
        <input name='username' type='text' {...register('username')} placeholder='Username' />
        <input name='password' type='password' {...register('password')} placeholder='Password' />
        <Button type='primary' htmlType='submit'>Entrar</Button>
      </form>
    </div>
  )
}
