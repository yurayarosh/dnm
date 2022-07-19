import { FC } from 'react'
import classNames from 'classnames'
import styles from './Nav.module.scss'

interface NavProps {
  className: string
}

const Nav: FC<NavProps> = ({ className }) => {
  return (
    <nav className={classNames(styles.nav, className)}>
      <ul>
        <li>
          <a href="#">about us</a>
        </li>
        <li>
          <a href="#">our servises</a>
        </li>
        <li>
          <a href="#">become a driver</a>
        </li>
        <li>
          <a href="#">dispatchers</a>
        </li>
        <li>
          <a href="#">contact us</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
