import { getCoinById } from '@/http/get-coin-by-id'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

export function Detail() {
  const { id } = useParams<{ id: string }>()

  const { data } = useQuery({
    queryKey: ['coin'],
    queryFn: () => getCoinById(id as string),
    staleTime: 1000 * 60 * 3, // 3 minutos
  })

  console.log(data)

  return (
    <div>
      <h1>Página Detail</h1>
    </div>
  )
}
