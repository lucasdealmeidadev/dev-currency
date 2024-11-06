import { createBrowserRouter } from 'react-router-dom'

import { Home } from '@pages/web/currency/home'
import { Detail } from '@pages/web/currency/datail'
import { NotFound } from '@pages/web/not-found'
import { Layout } from '@/components/layout'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/detail/:currency',
        element: <Detail />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])

export { router }
