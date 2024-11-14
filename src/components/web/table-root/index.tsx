import type { ReactNode } from 'react'
import styles from './table-root.module.css'

type TableRootProps = {
  children: ReactNode
  isLoading: boolean
}

export function TableRoot({ children, isLoading }: TableRootProps) {
  return (
    <>
      {isLoading ? (
        <p className="text-zinc-700 text-center mt-7">Carregando...</p>
      ) : (
        children
      )}
    </>
  )
}
