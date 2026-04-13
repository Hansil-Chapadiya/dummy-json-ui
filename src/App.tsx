import { useEffect, useState } from 'react';
import './App.css'
import { authService } from './services/authService'

export type AuthResponse = {
  accessToken: string;
  refreshToken: string;
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
}

function App() {
  const [ _, setAuth] = useState<AuthResponse | null>(null);

  useEffect(()=>{
    const getAutrhDetails = async () =>{
      const data = await authService({
        username : "emilys",
        password : "emilyspass"
      });

      setAuth(data);
    }
    getAutrhDetails();
  }, [])
  return (
    <>
    </>
  )
}

export default App
