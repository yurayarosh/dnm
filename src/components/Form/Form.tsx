import { FC } from 'react'
import classNames from 'classnames'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import Button from '../Button/Button'
import Input from '../Input/Input'
import Select from '../Select/Select'
import styles from './Form.module.scss'

interface FormProps {
  className?: string
}

const selectOptions = [
  {
    value: '1',
    label: 'Class a driving experience',
  },
  {
    value: '2',
    label: 'Class a driving experience 2',
  },
  {
    value: '3',
    label: 'Class a driving experience 3',
  },
]

type Inputs = {
  name: string
  phone: string
  experience: string
}

const Form: FC<FormProps> = ({ className }) => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data, e: any) => {
    console.log('submit', data)
    reset()
    e.target.reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classNames(styles.form, className)}>
      <div className={styles.field}>
        <Controller
          render={({ field }) => (
            <Input
              type="text"
              placeholder="Name"
              inputRef={field.ref}
              onChange={field.onChange}
              className={classNames({ error: errors.name })}
            />
          )}
          control={control}
          name="name"
          rules={{ required: true }}
        />
      </div>
      <div className={styles.field}>
        <Controller
          render={({ field }) => (
            <Input
              type="text"
              placeholder="Phone"
              inputRef={field.ref}
              onChange={field.onChange}
              className={classNames({ error: errors.phone })}
            />
          )}
          control={control}
          name="phone"
          rules={{ required: true }}
        />
      </div>
      <div className={styles.field}>
        <Controller
          render={({ field }) => (
            <Select
              options={selectOptions}
              defaultValue={selectOptions[0].value}
              inputRef={field.ref}
              onChange={field.onChange}
              className={classNames({ error: errors.experience })}
            />
          )}
          control={control}
          name="experience"
          defaultValue={selectOptions[0].value}
          rules={{ required: true }}
        />
      </div>

      <div className={classNames(styles.field, styles['field-button'])}>
        <Button type="submit" className="accent-secondary-light">
          Send
        </Button>
      </div>
    </form>
  )
}

export default Form
