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
    }
  }
}
