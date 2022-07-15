import React from "react";
import { useForm, Controller, FormProvider, useFormContext  } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

const Input = ({ type, name, rules, label, placeholder }) => {
  const { control, formState: { errors } } = useFormContext()
  return (
    <div>
      <label>{label}</label>
      <Controller control={control} rules={rules} name={name} render={({field}) => <input type={type} placeholder={placeholder} {...field} />} />
      { name && errors[name] && <div style={{border: '1px #000 solid', borderColor: errors[name]?.type === 'required' ? 'red' : errors[name]?.type === 'minLength' && 'green' }}>{errors[name]?.message}</div> }
    </div>
  )
}

export default function App() {

  const schema = yup.object({
    name: yup.string().typeError('Должно быть строкой').required('Обязательно name'),
    email: yup.string().email('Введите верный email').required('Обязательно email'),
    password: yup.string().typeError('Должно быть строкой').min(5, 'Минимальная длина пароля - 5 символов').required('Обязательно пароль'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Пароли не совпадают').required('Обязательно')
  })


  const methods = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    },
  });

  const { handleSubmit, control, isValid, isDirty, touched } = methods;

  const onSubmit = data => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input control={control} name='name' type='text' placeholder='Введи имя' label='лейбел имени' />
        <Input control={control} name='email' type='email' />
        <Input control={control} name='password' type='password' />
        <Input control={control} name='confirmPassword' type='password' />
        <input type="submit" />
      </form>
    </FormProvider>

  );
}

// disabled={ !isValid && !isDirty && !touched }