import type { CoinProps } from '@/types/coin'
import { formatedPriceUsdCompact } from '@/utils/functions/formated-price-compact'
import { formatedPriceUsd } from '@/utils/functions/formated-price-usd'
import { Link } from 'react-router-dom'

interface TableProps {
  data: CoinProps[] | undefined
}

export function Table({ data }: TableProps) {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-7">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-sm text-zinc-700 uppercase bg-gray-300 font-medium text-center">
          <tr>
            <th scope="col" className="px-6 py-3">
              Moeda
            </th>
            <th scope="col" className="px-6 py-3">
              Valor Mercado
            </th>
            <th scope="col" className="px-6 py-3">
              Preço
            </th>
            <th scope="col" className="px-6 py-3">
              Volume
            </th>
            <th scope="col" className="px-6 py-3">
              Mudança 24h
            </th>
          </tr>
        </thead>
        <tbody className="font-medium">
          {data?.map(coin => (
            <tr className="odd:bg-white even:bg-gray-50" key={coin?.id}>
              <td className="px-6 py-4 flex items-center gap-3">
                <img
                  src={`https://assets.coincap.io/assets/icons/${coin?.symbol?.toLocaleLowerCase()}@2x.png`}
                  alt={`Logo ${coin?.name}`}
                  className="w-8 duration-200 hover:scale-110"
                />

                <Link to={`/detail/${coin?.id}`}>
                  <span>{coin?.name}</span> | {coin?.symbol}
                </Link>
              </td>

              <td className="px-6 py-4 text-center">
                {formatedPriceUsdCompact(coin?.marketCapUsd)}
              </td>

              <td className="px-6 py-4 text-center">
                {formatedPriceUsd(coin?.priceUsd)}
              </td>

              <td className="px-6 py-4 text-center">
                {formatedPriceUsdCompact(coin?.volumeUsd24Hr)}
              </td>

              <td
                className={`px-6 py-4 text-center ${
                  Number(coin?.changePercent24Hr) > 0
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}
              >
                {Number(coin?.changePercent24Hr).toFixed(5)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
