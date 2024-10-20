import HomeScreen from './HomeScreen';
import AuthScreen from './AuthScreen';
import { useAuthStore } from '../../store/authUser';

const HomePage = () => {
  const {user} = useAuthStore() ;
  return (
    // Check if it's already a user so It will go to auth screen
    // If not It'll go to Authentication screen
    
    <>
      {user ? <HomeScreen/> : <AuthScreen/>}
    </>
  )
}

export default HomePage
