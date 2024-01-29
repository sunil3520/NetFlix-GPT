import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Browse from './Browse/Browse'
import Login from './Login/Login'

const AllRoutes = () => {

    const appRoutes = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path:"/browse",
             element: <Browse/>
        },
        
    ])

  return (
        <RouterProvider router={appRoutes}/>
  )
}

export default AllRoutes