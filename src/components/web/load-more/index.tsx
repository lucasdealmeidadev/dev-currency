import type {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query'
import type { CoinProps } from '@/types/coin'

type LoadMoreProps = {
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<CoinProps[], Error>>
  hasNextPage: boolean
  isFetchingNextPage: boolean
}

export function LoadMore({
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
}: LoadMoreProps) {
  return (
    <button
      type="button"
      className="bg-cyan-500 px-8 py-2 rounded-lg text-white my-4 duration-200 hover:bg-opacity-85"
      onClick={() => fetchNextPage()}
      disabled={!hasNextPage || isFetchingNextPage}
    >
      {isFetchingNextPage
        ? 'Carregando...'
        : hasNextPage
          ? 'Carregar mais'
          : 'Nada mais para carregar'}
    </button>
  )
}
