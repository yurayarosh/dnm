import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import classNames from 'classnames'
import styles from './Button.module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const Button: FC<ButtonProps> = ({ children, className }) => {
  return <button className={classNames(styles.btn, className)}>{children}</button>
}

export default Button
