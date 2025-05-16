export default function imageLoader({ src }) {
  const baseUrl = process.env.NODE_ENV === 'production' ? 'https://mlcogswell.github.io/Cursor' : ''
  return `${baseUrl}${src}`
} 