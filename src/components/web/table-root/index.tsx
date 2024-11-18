import type { ReactNode } from 'react'
import { Loading } from '@/components/ui/loading'

type TableRootProps = {
  children: ReactNode
  isLoading: boolean
}

export function TableRoot({ children, isLoading }: TableRootProps) {
  return (
    <>
      {isLoading ? (
        <div className="grid place-items-center max-w-2xl h-[calc(100vh-187px)] mx-auto">
          <Loading size={45} />
        </div>
      ) : (
        children
      )}
    </>
  )
}
