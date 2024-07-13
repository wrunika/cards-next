export const getAllDecks = async () => {
  const response = await fetch('')

  if (!response.ok) {
    throw new Error('Unable to fetch decks.')
  }

  return response.json()
}
