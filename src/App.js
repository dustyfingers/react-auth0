import LoginButton from './components/LoginButton';
import LogOutButton from './components/LogOutButton';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';

import './App.css';


function App() {

  const { isAuthenticated } = useAuth0();

  return (

    <>

      {!isAuthenticated && <LoginButton />}

      {isAuthenticated && <LogOutButton />}

      <Profile />

    </>

  );

}

export default App;
