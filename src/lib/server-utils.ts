import { headers } from 'next/headers'
import { cache } from 'react'

export const getHeaders = cache(() => {
  return headers()
})

export const getServerUrl = () => {
  const headers = getHeaders()
  const host = headers.get('host')
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https'
  return `${protocol}://${host}`
}

export const getServerSideProps = async (context: any) => {
  return {
    props: {
      // 서버 사이드에서 가져온 데이터
    },
  }
} 