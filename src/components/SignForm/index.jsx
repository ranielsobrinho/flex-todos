import { Button } from 'antd'
import './index.css'
import { useForm } from 'react-hook-form'

export default function SignForm() {
  const { register, handleSubmit } = useForm()

  const submit = data => {
    console.log(data)
  }
  return (
    <div className='sign-in-container'>
      <h2>Entrar</h2>
      <form onSubmit={handleSubmit(submit)} className='sign-in-form'>
        <input name='username' type='text' {...register('username')} placeholder='Username' />
        <input name='password' type='password' {...register('password')} placeholder='Password' />
        <Button type='primary' htmlType='submit'>Entrar</Button>
      </form>
    </div>
  )
}
