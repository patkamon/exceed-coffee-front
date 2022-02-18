import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Queue from './pages/Queue';
import Form from './pages/Form';
import AuthProvider from './contexts/AuthProvider';
import Order from './pages/Order';


function App() {
  return (
    <div className="App">
     
      <AuthProvider>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/form" element={<Form />} />
          <Route path="/queue" element={<Queue />}/>
          <Route path="/order" element={<Order />}/>

          <Route path="*" element={<Navigate to="home" />} />
        </Routes>
      </AuthProvider>


    </div>
  )
}

export default App
