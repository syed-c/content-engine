import Header from '@/components/layout/Header'
import AuthBottomNav from '@/components/layout/AuthBottomNav'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      {children}
      <AuthBottomNav />
      <div className="lg:hidden h-20"></div>
    </>
  )
}