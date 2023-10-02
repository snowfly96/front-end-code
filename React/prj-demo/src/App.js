import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import TodoList from './components/TodoList'
import Clock from './components/Clock'
import Watch from './components/Watch'

export default function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/home' element={<Home />}>
            <Route path='todolist' element={<TodoList />} />
            <Route path='clock' element={<Clock count={10} />} />
            <Route path='watch' element={<Watch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
