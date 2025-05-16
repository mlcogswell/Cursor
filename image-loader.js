export default function customImageLoader({ src }) {
  return process.env.NODE_ENV === 'production' ? `/Cursor${src}` : src
} 