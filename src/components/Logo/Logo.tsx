import { FC } from 'react'
import classNames from 'classnames'
import logo from '../../assets/img/logo.png'

interface LogoProps {
  className?: string
}

const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <div className={classNames('logo', className)}>
      <img src={logo} alt="" width="156" height="50" />
    </div>
  )
}

export default Logo
