import type { Metadata } from 'next'
import './globals.css'
import { AuthProvider } from '@/components/layouts/auth-provider'
import { Header } from '@/components/layouts/header'
import { Toaster } from '@/components/ui/sonner'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body>
        {/* AuthProvider はセッション（ログイン状態）をコンポーネントに共有するために必要 */}
        <AuthProvider>
          <div className="flex flex-col h-screen">
            <Header />
            <main className="flex-1 p-4 sm:p-6 lg:p-8 mt-[64px]">
              {children}
            </main>
          </div>
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  )
}
