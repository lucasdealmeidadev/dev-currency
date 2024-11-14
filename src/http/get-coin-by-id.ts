import type { CoinProps } from "@/types/coin";

export const getCoinById = async (id: string): Promise<CoinProps> => {
  const response = await fetch(
    `${import.meta.env.VITE_URL_API}/${id}`
  )
  const { data } = await response.json()

  return data;
}