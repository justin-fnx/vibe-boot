import { Metadata } from 'next'
import Image from "next/image";
import AdSense from "@/components/ads/AdSense";

export const metadata: Metadata = {
  title: '홈 | Vibe Boot',
  description: 'Next.js 서버 사이드 렌더링 메인 페이지',
}

export default async function Home() {
  // 서버 사이드에서 데이터를 가져오는 예시
  const data = await fetch('https://api.example.com/data', {
    next: { revalidate: 3600 } // 1시간마다 재검증
  }).then(res => res.json())

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">서버 사이드 렌더링 예제</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-700">
          이 페이지는 서버 사이드에서 렌더링됩니다.
        </p>
      </div>
    </div>
  )
}
