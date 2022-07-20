import { LongTextFormat } from 'helpers'

const formatLongText: LongTextFormat = (text, length) => {
  if (text.length > length) {
    return `${text.slice(0, length)}...`
  }

  return text
}

export default formatLongText
