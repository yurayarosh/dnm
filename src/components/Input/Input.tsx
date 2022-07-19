import classNames from 'classnames'
import { FC, InputHTMLAttributes, Ref } from 'react'
import styles from './Input.module.scss'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputRef?: Ref<any>
}

const Input: FC<InputProps> = props => {
  const { inputRef, className, ...attrs } = props

  return (
    <div className={classNames(styles.input, className)}>
      <input ref={inputRef} {...attrs} />
    </div>
  )
}

export default Input
