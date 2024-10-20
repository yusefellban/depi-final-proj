import React from 'react'
import HomeScreen from './HomeScreen';
import AuthScreen from './AuthScreen';

const HomePage = () => {
  const user = false ;
  return (
    // Check if it's already a user so It will go to auth screen
    // If not It'll go to Authentication screen
    
    <div>
      {user ? <HomeScreen/> : <AuthScreen/>}
    </div>
  )
}

export default HomePage
