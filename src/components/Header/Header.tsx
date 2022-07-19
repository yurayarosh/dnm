import { FC, useState } from 'react'
import classNames from 'classnames'
import ButtonLink from '../Button/ButtonLink'
import Logo from '../Logo/Logo'
import Nav from '../Nav/Nav'
import styles from './Header.module.scss'

const Header: FC = () => {
  const [menuIsOpen, setmenuIsOpen] = useState<boolean>(false)

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.inner}>
          <Logo className={styles.logo} />

          <div className={classNames(styles.body, { open: menuIsOpen })}>
            <Nav className={styles.nav} />

            <ButtonLink href="#" className={styles.button}>
              TRack shipment
            </ButtonLink>
          </div>

          <button
            className={styles.burger}
            type="button"
            aria-label="Toggle menu"
            onClick={() => setmenuIsOpen(!menuIsOpen)}
          />
        </div>
      </div>
    </header>
  )
}

export default Header
