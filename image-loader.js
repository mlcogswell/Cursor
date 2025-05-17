export default function imageLoader({ src }) {
  const baseUrl = process.env.NODE_ENV === 'production' ? 'https://mlcogswell.github.io/Cursor' : ''
  // Remove /public prefix if it exists
  const cleanSrc = src.startsWith('/public') ? src.slice(7) : src
  return `${baseUrl}${cleanSrc}`
} 