import { Suspense, lazy } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext.jsx'
import { MainLayout } from './layouts/MainLayout.jsx'

const Home = lazy(() => import('./pages/Home.jsx'))
const Businesses = lazy(() => import('./pages/Businesses.jsx'))
const Community = lazy(() => import('./pages/Community.jsx'))
const Posts = lazy(() => import('./pages/Posts.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const Login = lazy(() => import('./pages/Login.jsx'))
const Signup = lazy(() => import('./pages/Signup.jsx'))
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
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Route>
            <Route path="*" element={<NotFound />} />
            <Route path="home" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  )
}
