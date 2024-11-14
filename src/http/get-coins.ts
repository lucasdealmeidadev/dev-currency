import type { CoinProps } from "@/types/coin";

export const getCoins = async (offset: number): Promise<CoinProps[]> => {
  const response = await fetch(
    `${import.meta.env.VITE_URL_API}?limit=10&offset=${offset}`
  )
  const { data } = await response.json()

  return data;
}