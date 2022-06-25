const georgianLan = (text: string) => {
  const geoRegex = /[\u10A0-\u10FF]/
  const word = text.replace(/\s/g, '')
  for (let i = 0; i < word.length; i++) {
    const letter = word[i]
    if (!geoRegex.test(letter) && letter !== '.' && letter !== ',') return false
  }
  return true
}

export default georgianLan
