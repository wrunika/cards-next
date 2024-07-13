export const getAllCards = async () => {
  const response = await fetch('')

  if (!response.ok) {
    throw new Error('Unable to fetch cards.')
  }

  return response.json()
}
