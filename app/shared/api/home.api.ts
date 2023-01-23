const api_key = '04867229a3mshbca99457d7e0128p1cbdcfjsna0693e77a9f1'

export const translateOptions = {
  headers: {
    'X-RapidAPI-Key': api_key,
    'X-RapidAPI-Host': 'translated-mymemory---translation-memory.p.rapidapi.com',
  },
}

let translateURL = 'translated-mymemory---translation-memory.p.rapidapi.com'

export const synonymsOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': api_key,
    'X-RapidAPI-Host': 'thesaurus-by-api-ninjas.p.rapidapi.com',
  },
}

export const translateFetchData = async (
  url = `https://${translateURL}/api/get?langpair=en|uk&q=Hello`,
  options = translateOptions
) => {
  const data = await fetch(url, options)
    .then((response) => response.json())
    .catch((err) => console.error(err))

  return data
}

export const synonymsFetchData = async (
  url = `https://${translateURL}/api/get?langpair=en|uk&q=Hello`,
  options = synonymsOptions
) => {
  const data = await fetch(url, options)
    .then((response) => response.json())
    .catch((err) => console.error(err))

  return data
}
