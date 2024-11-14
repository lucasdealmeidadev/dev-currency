import { getCoinById } from '@/http/get-coin-by-id'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import styles from './detail.module.css'
import { formatedPriceUsdCompact } from '@/utils/functions/formated-price-compact'
import { formatedPriceUsd } from '@/utils/functions/formated-price-usd'

export function Detail() {
  const params = useParams<{ id: string }>()
  const id = params?.id?.toLocaleLowerCase() as string

  const { data, isLoading } = useQuery({
    queryKey: [`coin-${id}`],
    queryFn: () => getCoinById(id),
    staleTime: 1000 * 60 * 3, // 3 minutos
  })

  if (isLoading) {
    return <p className={styles.isLoading}>Carregando...</p>
  }

  if (!data) {
    return <p className={styles.emptyData}>Nenhum dado encontrado (;</p>
  }

  return (
    <div className={styles.detail}>
      <div>
        <img
          src={`https://assets.coincap.io/assets/icons/${data?.symbol?.toLocaleLowerCase()}@2x.png`}
          alt={`Logo ${data?.name}`}
        />
      </div>

      <div>
        <p>
          <span>Moeda</span> {data?.name}
        </p>
        <p>
          <span>Valor de Mercado: </span>{' '}
          {formatedPriceUsdCompact(data?.marketCapUsd as string)}
        </p>
        <p>
          <span>Preço: </span>
          {formatedPriceUsd(data?.priceUsd as string)}
        </p>
        <p>
          <span>Volume: </span>
          {formatedPriceUsdCompact(data?.volumeUsd24Hr as string)}
        </p>
        <p>
          <span>Mudança 24H: </span>
          {Number(data?.changePercent24Hr).toFixed(5)}
        </p>
      </div>
    </div>
  )
}