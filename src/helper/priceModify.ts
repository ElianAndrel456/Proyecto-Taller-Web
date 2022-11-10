export const priceModify = (price: string) => {
  const modify = Number(price).toLocaleString('en', {
    style: 'currency',
    currency: 'PEN',
  })
  return modify
}
