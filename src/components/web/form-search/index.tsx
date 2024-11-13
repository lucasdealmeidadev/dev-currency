import { useRef, type FormEvent } from 'react'
import { BsSearch } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import styles from './form-search.module.css'

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
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Digite o nome da moeda... Ex: Bitcoin"
        ref={inputRef}
      />

      <button type="submit">
        <BsSearch size={30} color="#fff" />
      </button>
    </form>
  )
}
