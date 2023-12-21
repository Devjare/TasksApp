import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// TODO: Find out the difference bewtween using and not using brackets ('{}')
// on imports. Seems like not using them explicitly says import functions
import TaskPage from './pages/TasksPage'
import TaskFormPage from './pages/TaskFormPage'
import Navigation from './components/Navigation';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes >
        <Route path="/" element={<Navigate to="/tasks" />}/>
        <Route path="/tasks" element={<TaskPage />}/>
        <Route path="/tasks-create" element={<TaskFormPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
