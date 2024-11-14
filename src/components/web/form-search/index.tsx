import { useRef, type FormEvent } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

export function FormSearch() {
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (inputRef.current?.value) {
      const { value } = inputRef.current
      navigate(`/detail/${value}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full flex gap-6">
      <input
        type="text"
        placeholder="Digite o nome da moeda... Ex: Bitcoin"
        ref={inputRef}
        className="w-full px-2 py-3 rounded-lg outline-none border"
      />

      <button type="submit">
        <BsSearch size={30} className="text-cyan-500" />
      </button>
    </form>
  )
}
