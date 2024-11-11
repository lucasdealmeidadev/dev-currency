export const formatedPriceUsd = (priceUsd: string) => {
  const price = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })

  return price.format(Number(priceUsd))
}