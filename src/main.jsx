import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Blogs from './pages/Blogs.jsx';
import BookMarks from './pages/BookMarks.jsx';
import MainLayouts from './Layouts/MainLayouts';
import Blog from './pages/Blog.jsx';
import Content from './components/Content.jsx';
import Author from './components/Author';
import { Toaster } from 'react-hot-toast';


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/blogs',
        element: <Blogs />,
        loader: () => fetch('https://dev.to/api/articles?per_page=20&&top=7')
      },
      {
        path: '/blog/:id',
        element: <Blog />,
        loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
        children: [
          {
            index: true,
            element: <Content />,
            loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
          },
          {
            path: 'author',
            element: <Author />,
            loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
          }
        ]
      },
      {
        path: '/bookmarks',
        element: <BookMarks />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <Toaster />
  </React.StrictMode>,
)
