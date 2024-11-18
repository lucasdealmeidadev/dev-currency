import { Loading } from '@/components/ui/loading'
import { FormSearch } from '@/components/web/form-search'
import { getCoinById } from '@/http/get-coin-by-id'
import { formatedPriceUsdCompact } from '@/utils/functions/formated-price-compact'
import { formatedPriceUsd } from '@/utils/functions/formated-price-usd'
import { useQuery } from '@tanstack/react-query'
import { Link, useParams } from 'react-router-dom'

export function Detail() {
  const { id } = useParams<{ id: string }>()
  const search = id?.toLowerCase() as string

  const { data, isLoading } = useQuery({
    queryKey: [`coin-${search}`],
    queryFn: () => getCoinById(search),
    staleTime: 1000 * 60 * 3, // 3 minutos
  })

  return (
    <>
      <FormSearch />
      <div className="grid place-items-center max-w-2xl h-[calc(100vh-187px)] mx-auto">
        {isLoading && <Loading size={45} />}

        {!isLoading && !data && (
          <p className="text-center text-zinc-700 pt-4 text-lg">
            Nenhum dado encontrado (;
          </p>
        )}

        {data && (
          <div className="flex flex-row bg-white rounded-lg shadow-md sm:rounded-lg gap-16 p-10 w-full justify-items-start sm:justify-center">
            <div className="hidden sm:flex items-center justify-center">
              <img
                src={`https://assets.coincap.io/assets/icons/${data?.symbol?.toLocaleLowerCase()}@2x.png`}
                alt={`Logo ${data?.name}`}
                className="w-24 h-24"
              />
            </div>

            <div className="pl-5 text-xl leading-relaxed text-zinc-800">
              <p>
                <span className="font-semibold">Moeda:</span> {data?.name} |{' '}
                {data?.symbol}
              </p>
              <p>
                <span className="font-semibold">Valor de Mercado: </span>{' '}
                {formatedPriceUsdCompact(data?.marketCapUsd as string)}
              </p>
              <p>
                <span className="font-semibold">Preço: </span>
                {formatedPriceUsd(data?.priceUsd as string)}
              </p>
              <p>
                <span className="font-semibold">Volume: </span>
                {formatedPriceUsdCompact(data?.volumeUsd24Hr as string)}
              </p>
              <p
                className={`font-semibold pb-4 ${
                  Number(data?.changePercent24Hr) > 0
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}
              >
                <span className="font-bold">Mudança 24H: </span>
                {Number(data?.changePercent24Hr).toFixed(5)}
              </p>

              <Link
                to="/"
                className="bg-cyan-500 px-8 py-2 rounded-lg text-white duration-200 hover:bg-opacity-85 text-base"
              >
                Voltar
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
