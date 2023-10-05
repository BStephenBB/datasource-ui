import { ReactNode } from 'react'
import { Sidebar } from './Sidebar'
import { TopBar } from './TopBar'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Sidebar />
      <main>
        <TopBar />
        {children}
      </main>
    </>
  )
}
