import { FC, LinkHTMLAttributes, ReactNode } from 'react'
import classNames from 'classnames'
import styles from './Button.module.scss'

interface LinkProps extends LinkHTMLAttributes<HTMLLinkElement> {
  children: ReactNode
}

const ButtonLink: FC<LinkProps> = ({ children, className, href }) => {
  return (
    <a href={href} className={classNames(styles.btn, className)}>
      {children}
    </a>
  )
}

export default ButtonLink
