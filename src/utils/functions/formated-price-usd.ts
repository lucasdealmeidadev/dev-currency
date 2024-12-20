export const formatedPriceUsd = (priceUsd: string) => {
  const price = Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return price.format(Number(priceUsd))
}