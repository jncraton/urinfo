async function getArxivMetadata(query, maxResults = 1) {
  const baseUrl = 'http://export.arxiv.org/api/query'

  const params = new URLSearchParams({
    search_query: `all:${query}`,
    start: '0',
    max_results: String(maxResults),
  })

  const apiUrl = `${baseUrl}?${params.toString()}`

  try {
    const response = await fetch(apiUrl)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    const xmlData = await response.text()

    return {
      authors: [...xmlData.matchAll(/<author>.*?<name>(.*?)<\/name>.*?<\/author>/gms)].map(a => a[1]),
      title: [...xmlData.matchAll(/<title>(.*?)<\/title>/gms)][1][1],
      year: [...xmlData.matchAll(/<published>(\d\d\d\d)/gms)][0][1],
      abstract: [...xmlData.matchAll(/<summary>(.*?)<\/summary>/gms)][0][1],
    }
  } catch (error) {
    console.error('Error fetching arXiv data:', error)
    return ''
  }
}

const urinfo = async uri => {
  if (uri.startsWith('urn:isbn:')) {
    const isbn = uri.slice(9)
    const res = await fetch(`https://openlibrary.org/search.json?q=isbn:${isbn}`)
    const result = await res.json()

    return {
      title: result.docs[0].title,
      authors: result.docs[0].author_name,
      year: result.docs[0].first_publish_year,
      isbn: isbn,
      openlibrary: `https://openlibrary.org/isbn/${isbn}`,
    }
  } else if (uri.startsWith('https://arxiv.org')) {
    return getArxivMetadata(uri.split('/').slice(-1))
  }
}
