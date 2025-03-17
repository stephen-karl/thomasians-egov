import { Route , Routes } from "react-router-dom"
import HomePage from "@pages/public/HomePage"
import LoginPage from "@pages/public/LoginPage"
import SignUpPage from "@pages/public/SignUpPage"
import NotFoundPage from "@pages/utils/NotFoundPage"
import HomeLayout from "@layouts/HomeLayout"
import VerificationPage from "@pages/public/VerificationPage"


const App = () => {
  return (
    <Routes>
      
      <Route element={<HomeLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<SignUpPage />} />
      </Route>
      {/* Public Pages with no Layouts */}
      <Route path="/verify" element={<VerificationPage />} />
      
      {/*  */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}

export default App