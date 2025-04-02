import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/input'
import profile from './assets/profile.jpg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2 style={{textAlign:'left'}}>Profile Photo</h2>
    <div className='Photo-Button'>
      <img src={profile} alt="프로필사진"></img>
      <div className='Button12'>
        <button className='button1'>Upload Photo</button>
        <button className='button2'>remove</button>
      </div>
    </div>
    <hr></hr>
    <h2 style={{textAlign:'left'}}>User Detail</h2>
    <div className='input-up'>
      <Input label="Label Name" placeholder="placeholder"></Input>
      <Input label="Label Name" placeholder="placeholder"></Input>
    </div>
    <div className='input-down'>
      <Input label="Label Name" placeholder="placeholder"></Input>
      <Input label="Label Name" placeholder="placeholder"></Input>
      <Input label="Label Name" placeholder="placeholder"></Input>
    </div>
    <div className='Button34'>
      <button className='button3'>Back</button>
      <button className='button4'>Continue</button>
    </div>
    </>
  )
}

export default App
