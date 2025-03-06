import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'

import Steps from './Components/Steps.jsx'
import Navbar from './Components/Navbar.jsx'
import Popularslide from './Components/Popularslide.jsx'
import About from './Components/About.jsx'
import Footer from './Components/Footer.jsx'
import { ClerkProvider, SignIn } from '@clerk/clerk-react'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter(
  [ {
    path:'/About',
    element:<>
     <Navbar></Navbar>
     <About></About>
     <Footer></Footer>
    </>
  } ,
    {
      path:'/',
      element:<>
      <App></App>
      <Popularslide></Popularslide>
      <Footer></Footer>
      </>
      
    },
    {
      path:'/:id',
      element:<>
      <Navbar></Navbar>
      <Steps ></Steps>
      <Footer></Footer>
      </>
    }
   
  ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
    <RouterProvider router={router}><App/></RouterProvider>
      
    </ClerkProvider>
  </StrictMode>,
)
