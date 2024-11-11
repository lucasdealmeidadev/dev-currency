import type { CoinProps } from '@/types/coin'
import { formatedPriceUsdCompact } from '@utils/functions/formated-price-compact'
import { formatedPriceUsd } from '@utils/functions/formated-price-usd'
import { useEffect, useRef, useState, type FormEvent } from 'react'
import { BsSearch } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import styles from './home.module.css'

export function Home() {
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)
  const [coins, setCoins] = useState<CoinProps[]>([])
  const [offset, setOffset] = useState<number>(0)

  useEffect(() => {
    getData()
  }, [offset])

  const getData = async () => {
    const response = await fetch(
      `https://api.coincap.io/v2/assets?limit=10&offset=${offset}`
    )
    const { data } = await response.json()
    setCoins([...coins, ...data])
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (inputRef.current?.value) {
      const { value } = inputRef.current
      navigate(`/detail/${value}`)
    }
  }

  const handleGetMore = async () => {
    if (offset === 0) {
      setOffset(10)
      return
    }

    setOffset(offset + 10)
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
          {coins?.map(coin => (
            <tr className={styles.tr} key={coin?.id}>
              <td className={styles.tdLabel} data-label="Moeda">
                <div className={styles.name}>
                  <img
                    className={styles.logo}
                    src={`https://assets.coincap.io/assets/icons/${coin?.symbol?.toLocaleLowerCase()}@2x.png`}
                    alt={`Logo ${coin?.name}`}
                  />

                  <Link to={`/detail/${coin?.id}`}>
                    <span>{coin?.name}</span> | {coin?.symbol}
                  </Link>
                </div>
              </td>
              <td className={styles.tdLabel} data-label="Valor Mercado">
                {formatedPriceUsdCompact(coin?.marketCapUsd)}
              </td>
              <td className={styles.tdLabel} data-label="Preço">
                {formatedPriceUsd(coin?.priceUsd)}
              </td>
              <td className={styles.tdLabel} data-label="Volume">
                {formatedPriceUsdCompact(coin?.volumeUsd24Hr)}
              </td>
              <td
                className={
                  Number(coin?.changePercent24Hr) > 0
                    ? styles.tdProfit
                    : styles.tdLoss
                }
                data-label="Mudança 24h"
              >
                <span>{Number(coin?.changePercent24Hr).toFixed(5)}</span>
              </td>
            </tr>
          ))}
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
