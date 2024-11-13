import type { CoinProps } from "@/types/coin";

export const getCoinById = async (id: string): Promise<CoinProps> => {
  const response = await fetch(
    `https://api.coincap.io/v2/assets/${id}`
  )
  const { data } = await response.json()

  return data;
}