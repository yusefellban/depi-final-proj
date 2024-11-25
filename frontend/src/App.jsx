import { Routes , Route, Navigate } from "react-router-dom"
import SignUpPage from "./pages/SignUpPage"
import LoginPage from "./pages/LoginPage"
import HomePage from "./pages/home/HomePage"
import Footer from "./components/footer"
import { Toaster } from "react-hot-toast"
import { useAuthStore } from "./store/authUser"
import { useEffect } from "react"
import { Loader } from "lucide-react"
function App() {
  const {user, isCheckingAuth,authCheck} = useAuthStore();
  console.log("auth user is here:",user)
  useEffect(() =>{
    authCheck();
  },[authCheck]);
  if(isCheckingAuth){
    return(
      <div className="h-screen">
        <div className="flex justify-center items-center bg-black h-full">
          <Loader className="animate-spin text-red-600 size-10"/>
        </div>
      </div>
    )
  }
  return (
    <>
    <Routes>
      <Route path = '/' element = {<HomePage/>} />
      <Route path = '/login' element = {user? <Navigate to={"/"}/> : <LoginPage/> } />
      <Route path = '/signup' element = {user? <Navigate to={"/"}/> : <SignUpPage/>} />
    </Routes>
    <Footer/>
    <Toaster/>
    </>
  )
}

export default App
