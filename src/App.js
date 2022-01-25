import LoginButton from './components/LoginButton';
import LogOutButton from './components/LogOutButton';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';

import './App.css';


function App() {

  const { isAuthenticated, isLoading } = useAuth0();

  // this fixes imfo jumping on load
  if (isLoading) return <div>Loading...</div>;
  
  else return (

    <>

      {!isAuthenticated && <LoginButton />}

      {isAuthenticated && <LogOutButton />}

      <Profile />

    </>

  );

}

export default App;
