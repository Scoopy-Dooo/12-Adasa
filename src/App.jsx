import React from 'react'
import Layout from './components/Layout.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router';
import Home from './components/Home';
import Handler404 from './components/Handler404';
import About from './components/About';
import Blog from './components/Blog';
import BlogDetails from './components/BlogDetails.jsx';


export default function App() {
  const routes = createBrowserRouter([
    {
      path: "/", element: <Layout />, children: [
        { path: "/", element: <Home /> },
        { path: "/home", element: <Home /> },
        { path: "/blog", element: <Blog /> },
        { path: "/blog?category=:category", element: <Blog /> },
        { path: "/blog/:post", element: <BlogDetails /> },
        { path: "about", element: <About /> },
        { path: "*", element: <Handler404 /> },
      ]
    },
  ]);
  return (
    <RouterProvider router={routes} />
  )
}

