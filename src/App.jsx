import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NavBar from './components/NavBar'
import AboutUsM from './components/AboutusM'

const router = createBrowserRouter([
  {
    path:"/",
    element:<>
    <NavBar/>
    <Layout/>
    </>
  },
  {
    path:"/aboutus",
    element:<>
    <NavBar/>
    <AboutUsM/>
    </>
  },
]);

function App(){
  return<RouterProvider router={router}/>;
}
export default App;