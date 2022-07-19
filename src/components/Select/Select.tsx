import classNames from 'classnames'
import { FC, Ref, SelectHTMLAttributes } from 'react'

import styles from './Select.module.scss'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  inputRef?: Ref<any>
  options: Array<{ value: string; label: string }>
}

const Select: FC<SelectProps> = props => {
  const { className, options, inputRef, ...attrs } = props

  return (
    <div className={classNames(styles.select, className)}>
      <select ref={inputRef} {...attrs}>
        {options &&
          options.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
    </div>
  )
}

export default Select
