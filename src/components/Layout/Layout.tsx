import { FC, ReactNode } from 'react'
import Header from '../Header/Header'
import styles from './Layout.module.scss'

interface LayoutProps {
  children: ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
    </div>
  )
}

export default Layout
