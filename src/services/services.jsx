const BASEURL = 'http://localhost:3002/'

export async function getAllCocktails () {
  try {
  const result = await fetch(BASEURL)
  const data = await result.json()
  return data
  } catch (err) {
    console.error(err);
  }
}
