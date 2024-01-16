import React from 'react'
import Home from './Home/Home'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './login/Login'
import Signup from './signup/Signup'

const AllRoutes = () => {

    const appRoutes = createBrowserRouter([
        {
            path: "/",
            element: <Home/>
        },
        {
            path:"/login",
             element: <Login/>
        },
        {
            path: "/signup",
            element : <Signup/>
        }
    ])

  return (
        <RouterProvider router={appRoutes}/>
  )
}

export default AllRoutes