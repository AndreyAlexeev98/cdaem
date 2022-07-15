import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';


const Input = ({ register, name, validation, placeholder, type, errorView }) => {
  return (
    <label htmlFor={name}>
      <input placeholder={placeholder} type={type} {...register(name, validation)} />
      <div>{errorView}</div>
    </label>
  )
}

export default function App() {

  const schema = yup.object({
    name: yup.string().typeError('Должно быть строкой').required('Обязательно name'),
    email: yup.string().email('Введите верный email').required('Обязательно email'),
    password: yup.string().typeError('Должно быть строкой').min(5, 'Минимальная длина пароля - 5 символов').required('Обязательно пароль'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Обязательно')
  })


  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      {/* react hook form validation */}
      
      {/* <Input style={{ borderColor: errors.exampleRequired &&  'red' }} register={register} name='name' validation={{ required: 'Поле не заполнено', minLength: {value: 3, message: 'minLength - 3'} }} placeholder='Введи имя' type='text' errorView={ errors.name && <div style={{border: '1px #000 solid', borderColor: errors.name?.type === 'required' ? 'red' : errors.name?.type === 'minLength' && 'green' }}>{errors.name?.message}</div> } /> */}


      {/* with yap validation */}

      <Input style={{ borderColor: errors.name &&  'red' }} register={register} name='email'  placeholder='Введи имя' type='text' errorView={ errors.name && <div style={{border: '1px #000 solid', borderColor: errors.name?.type === 'required' ? 'red' : errors.name?.type === 'minLength' && 'green' }}>{errors.name?.message}</div> } />

      <Input style={{ borderColor: errors.email &&  'red' }} register={register} name='email'  placeholder='Введи мыло' type='email' errorView={ errors.email && <div style={{border: '1px #000 solid', borderColor: errors.email?.type === 'required' ? 'red' : errors.email?.type === 'minLength' && 'green' }}>{errors.email?.message}</div> } />

      <Input style={{ borderColor: errors.password &&  'red' }} register={register} name='password'  placeholder='Введи пароль' type='password' errorView={ errors.password && <div style={{border: '1px #000 solid', borderColor: errors.password?.type === 'required' ? 'red' : errors.password?.type === 'minLength' && 'green' }}>{errors.password?.message}</div> } />
      
      <input disabled={false} type="submit" />
    </form>
  );
}