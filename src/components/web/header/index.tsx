import logoImg from '@/assets/logo.svg'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <header className="flex justify-center content-center p-5">
      <Link to="/">
        <img src={logoImg} alt="Logo DevCurrency" />
      </Link>
    </header>
  )
}
