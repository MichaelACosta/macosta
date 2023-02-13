export const formatDataLanguages = (reposData) => {
  const languages = reposData.map((repo) => repo.language)
  const languagesListFormated = languages.reduce((object, item) => {
    if (item === null) return object

    if (!object.some(({ key }) => key === item))
      object.push({ key: item, data: 1 })
    else {
      return object.map((language) =>
        language.key === item
          ? {
              key: language.key,
              data: language.data + 1,
            }
          : {
              key: language.key,
              data: language.data,
            }
      )
    }
    return object
  }, [])

  return languagesListFormated
}
