import type { CoinProps } from "@/types/coin";

export const getCoins = async (offset: number): Promise<CoinProps[]> => {
  const response = await fetch(
    `https://api.coincap.io/v2/assets?limit=10&offset=${offset}`
  )
  const { data } = await response.json()

  return data;
}