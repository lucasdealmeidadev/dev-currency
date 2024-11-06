import { Header } from '../web/header'
import { Outlet } from 'react-router-dom'

export function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
