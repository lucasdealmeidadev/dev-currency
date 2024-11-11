export const formatedPriceUsdCompact = (priceUsd: string) => {
  const price = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    notation: "compact"
  })

  return price.format(Number(priceUsd))
}