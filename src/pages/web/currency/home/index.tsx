import { FormSearch } from '@/components/web/form-search'
import { LoadMore } from '@/components/web/load-more'
import { Table } from '@/components/web/table'
import { TableRoot } from '@/components/web/table-root'
import { getCoins } from '@/http/get-coins'
import { useInfiniteQuery } from '@tanstack/react-query'
import styles from './home.module.css'

export function Home() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['coins'],
    queryFn: ({ pageParam }) => getCoins(pageParam),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length ? allPages.length * 10 : undefined
    },
    select: data => data.pages.flat(),
    staleTime: 1000 * 60 * 3, // 3 minutos
  })

  return (
    <main className={styles.container}>
      <FormSearch />
      <TableRoot isLoading={isLoading}>
        <Table data={data} />
        <LoadMore
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
      </TableRoot>
    </main>
  )
}
