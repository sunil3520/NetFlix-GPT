import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Browse from './Browse/Browse'
import Login from './Login/Login'
import SingleMovie from './SingleMovie/SingleMovie'
import Error from './Error/Error'
import App from '../App'

const AllRoutes = () => {

    const appRoutes = createBrowserRouter([
      {
        path:"/",
        element:<App/>,
        children:[
            {
                path: "/",
                element: <Login/>
            },
            {
                path:"/browse",
                 element: <Browse/>,
                 
            },
            {
                path:"/browse/:movieId",
                element : <SingleMovie/>
             },
            {
                path :"*",
                element : <Error/>
            }
        ]
      }
        
    ])

  return (
        <RouterProvider router={appRoutes}/>
  )
}

export default AllRoutes