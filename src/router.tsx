import { createBrowserRouter } from 'react-router-dom'

import { Home } from '@web/currency/home'
import { Detail } from '@web/currency/datail'
import { NotFound } from '@web/not-found'

const router = createBrowserRouter([
  {
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
