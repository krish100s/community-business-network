import { Suspense, lazy } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { MainLayout } from './layouts/MainLayout.jsx'

const Home = lazy(() => import('./pages/Home.jsx'))
const Businesses = lazy(() => import('./pages/Businesses.jsx'))
const Community = lazy(() => import('./pages/Community.jsx'))
const Posts = lazy(() => import('./pages/Posts.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Profile = lazy(() => import('./pages/Profile.jsx'))
const Login = lazy(() => import('./pages/Login.jsx'))
const Signup = lazy(() => import('./pages/Signup.jsx'))
const ForgotPassword = lazy(() => import('./pages/ForgotPassword.jsx'))
const EditProfile = lazy(() => import('./pages/EditProfile.jsx'))
const ManageBusiness = lazy(() => import('./pages/ManageBusiness.jsx'))
const CreatePost = lazy(() => import('./pages/CreatePost.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

function LoadingFallback() {
  return null
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="businesses" element={<Businesses />} />
              <Route path="community" element={<Community />} />
              <Route path="posts" element={<Posts />} />
              <Route path="about" element={<About />} />
              <Route path="profile" element={<Profile />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="forgot-password" element={<ForgotPassword />} />
              <Route path="profile/edit" element={<EditProfile />} />
              <Route path="businesses/manage" element={<ManageBusiness />} />
              <Route path="posts/create" element={<CreatePost />} />
            </Route>
            <Route path="*" element={<NotFound />} />
            <Route path="home" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  )
}
