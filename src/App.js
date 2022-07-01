import { useState } from 'react';
import { useForm } from 'react-hook-form';

export default function App() {
  const [result, setResult] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onChange' });
  const onValid = () => {
    setResult('Thank you!');
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onValid)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
        }}
      >
        <label>
          Name :{' '}
          <input
            {...register('name', {
              required: 'Please write down your name.',
              onChange: () => setResult(''),
            })}
            type='text'
            placeholder='Name'
            style={{ width: 200 }}
          />
          <span style={{ marginLeft: 10, color: 'red' }}>
            {errors?.name?.message}
          </span>
        </label>
        <label>
          Email :{' '}
          <input
            {...register('email', {
              required: 'Please write down your email.',
              pattern: {
                value: /\w+(@naver.com)\b/g,
                message: 'Only @naver.com emails allowed',
              },
              onChange: () => setResult(''),
            })}
            type='text'
            placeholder='Only @naver.com'
            style={{ width: 200 }}
          />
          <span style={{ marginLeft: 10, color: 'red' }}>
            {errors?.email?.message}
          </span>
        </label>
        <label>
          Password :{' '}
          <input
            {...register('password', {
              required: 'Please write down your password.',
              minLength: {
                value: 10,
                message: 'Password word has to be more than 10',
              },
              onChange: () => setResult(''),
            })}
            type='password'
            placeholder='Min 10 Characters'
            style={{ width: 200 }}
          />
          <span style={{ marginLeft: 10, color: 'red' }}>
            {errors?.password?.message}
          </span>
        </label>
        <button>Log In</button>
        <span>{result}</span>
      </form>
    </div>
  );
}
