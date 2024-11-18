import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <h1 className="text-center text-zinc-700 pt-4 text-lg">
        Página 404, está página não existe.
      </h1>

      <Link
        to="/"
        className="bg-cyan-500 px-8 py-2 rounded-lg text-white duration-200 hover:bg-opacity-85 text-base"
      >
        Voltar
      </Link>
    </div>
  )
}
