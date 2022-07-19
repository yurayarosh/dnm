import { FC } from 'react'
import classNames from 'classnames'
import image from '../../../assets/img/mask-group.jpg'
import ButtonLink from '../../Button/ButtonLink'
import styles from './SectionContacts.module.scss'
import Form from '../../Form/Form'

const SectionContacts: FC = () => {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles['title-block']}>
            <h1 className="title title--h2">We are hiring!</h1>
            <p className="subttl">The road is your second home? Join us!</p>
          </div>

          <div className={styles.content}>
            <div className={classNames(styles.left, 'text')}>
              <p>
                We hire drivers from all across the United States, promoting quality opportunities
                for hardworking individuals of all backgrounds.
              </p>

              <p>
                We require our drivers to have a minimum of two years experience, knowing they have
                the skills and reputation to successfully take on any special requests we receive
                from our customers.
              </p>

              <Form className={styles.form} />
            </div>

            <div className={styles.right}>
              <img src={image} alt="" />
            </div>
          </div>
        </div>

        <div className={styles['btn-block']}>
          <p className="title title--h3">
            Or send all needed information directly to our HR department
          </p>
          <ButtonLink href="#" className={styles.button}>
            Apply Now{' '}
            <svg
              width="51"
              height="8"
              viewBox="0 0 51 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50.3536 4.35355C50.5488 4.15829 50.5488 3.84171 50.3536 3.64645L47.1716 0.464466C46.9763 0.269204 46.6597 0.269204 46.4645 0.464466C46.2692 0.659728 46.2692 0.976311 46.4645 1.17157L49.2929 4L46.4645 6.82843C46.2692 7.02369 46.2692 7.34027 46.4645 7.53553C46.6597 7.7308 46.9763 7.7308 47.1716 7.53553L50.3536 4.35355ZM0 4.5H50V3.5H0V4.5Z"
                fill="white"
              />
            </svg>
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}

export default SectionContacts
