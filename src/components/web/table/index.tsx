import type { CoinProps } from '@/types/coin'
import { formatedPriceUsdCompact } from '@/utils/functions/formated-price-compact'
import { formatedPriceUsd } from '@/utils/functions/formated-price-usd'
import { Link } from 'react-router-dom'
import styles from './table.module.css'

interface TableProps {
  data: CoinProps[] | undefined
}

export function Table({ data }: TableProps) {
  return (
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
        {data?.map(coin => (
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
  )
}
