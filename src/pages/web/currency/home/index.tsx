import type { CoinProps } from '@/types/coin'
import { useEffect, useRef, useState, type FormEvent } from 'react'
import { BsSearch } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import styles from './home.module.css'

export function Home() {
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)
  const [coins, setCoins] = useState<CoinProps[]>([])

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        'https://api.coincap.io/v2/assets?limit=10&offset=0'
      )
      const { data } = await response.json()

      console.log(data)
    }

    getData()
  }, [])

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (inputRef.current?.value) {
      const { value } = inputRef.current
      navigate(`/detail/${value}`)
    }
  }

  const handleGetMore = async () => {
    alert('teste')
  }

  return (
    <main className={styles.container}>
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

      <table>
        <thead>
          <tr>
            <th scope="col">Moeda</th>
            <th scope="col">Valor Mercado</th>
            <th scope="col">Preço</th>
            <th scope="col">Volume</th>
            <th scope="col">Mudança 24h</th>
          </tr>
        </thead>
        <tbody id="tbody">
          <tr className={styles.tr}>
            <td className={styles.tdLabel} data-label="Moeda">
              <div className={styles.name}>
                <Link to={'/detail/bitcoin'}>
                  <span>Bitcoin</span> | BTC
                </Link>
              </div>
            </td>
            <td className={styles.tdLabel} data-label="Valor Mercado">
              1T
            </td>
            <td className={styles.tdLabel} data-label="Preço">
              8.000
            </td>
            <td className={styles.tdLabel} data-label="Volume">
              2B
            </td>
            <td className={styles.tdProfit} data-label="Mudança 24h">
              <span>1.20</span>
            </td>
          </tr>
          <tr className={styles.tr}>
            <td className={styles.tdLabel} data-label="Moeda">
              <div className={styles.name}>
                <Link to={'/detail/bitcoin'}>
                  <span>Bitcoin</span> | BTC
                </Link>
              </div>
            </td>
            <td className={styles.tdLabel} data-label="Valor Mercado">
              1T
            </td>
            <td className={styles.tdLabel} data-label="Preço">
              8.000
            </td>
            <td className={styles.tdLabel} data-label="Volume">
              2B
            </td>
            <td className={styles.tdProfit} data-label="Mudança 24h">
              <span>1.20</span>
            </td>
          </tr>
        </tbody>
      </table>

      <button
        type="button"
        className={styles.buttonMore}
        onClick={handleGetMore}
      >
        Carregar mais
      </button>
    </main>
  )
}
