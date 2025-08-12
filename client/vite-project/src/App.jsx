import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginSignup from './components/loginSignup/LoginSignup.jsx'
import PrivateRoute from './components/loginSignup/PrivateRouter.jsx'
import AppRoutes from './routes/AppRoutes.jsx'

function App() {
  
return (
  <div>
    <AppRoutes />
  </div>
);
}

export default App
