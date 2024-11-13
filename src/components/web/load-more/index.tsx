import type {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query'
import styles from './load-more.module.css'
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
      className={styles.buttonMore}
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
