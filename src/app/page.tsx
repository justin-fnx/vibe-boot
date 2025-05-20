import { Metadata } from 'next'
import Image from "next/image";
import AdSense from "@/components/ads/AdSense";

export const metadata: Metadata = {
  title: '홈 | Vibe Boot',
  description: 'Next.js 서버 사이드 렌더링 메인 페이지',
}

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">서버 사이드 렌더링 예제</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <p className="text-gray-700">
          이 페이지는 서버 사이드에서 렌더링됩니다.
        </p>
        <div className="mt-4">
          <h2 className="text-2xl font-semibold mb-4">주요 기능</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>서버 사이드 렌더링 (SSR)</li>
            <li>Google Analytics 통합</li>
            <li>Google AdSense 통합</li>
            <li>반응형 디자인</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
