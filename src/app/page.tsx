import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Vibe Boot
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Next.js와 TypeScript로 구축된 현대적인 웹 애플리케이션
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/about"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                시작하기
              </a>
              <a href="/services" className="text-sm font-semibold leading-6 text-gray-900">
                서비스 보기 <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
