import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { lazy,Suspense } from 'react'

const Signin = lazy(() => import("./Components/Signin/Signin.jsx"))
const Video = lazy(() => import("./Components/Video/Video.jsx"))
const CreateAccount = lazy(() => import("./Components/CreateAccount/CreateAccount.jsx"))
const UserAccount = lazy(() => import("./Components/UserAccount/UserAccount.jsx"))
 
const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Suspense fallback={<h2>Loading .....</h2>}> <App/></Suspense>,
  },
  {
    path:"/body/:id",
    element:<Suspense fallback={<h2>Loading .....</h2>}> <Video/></Suspense>,
   },
   {
    path:"/signin",
    element: <Suspense fallback={<h2>Loading .....</h2>}><Signin/></Suspense>,
   },
   {
    path:"/newaccount",
    element:<Suspense fallback={<h2>Loading .....</h2>}><CreateAccount/></Suspense>,
   },
   {
    path:"/useraccount",
    element:<Suspense fallback={<h2>Loading .....</h2>}><UserAccount/></Suspense>,
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter} ></RouterProvider>
  </StrictMode>,
)
