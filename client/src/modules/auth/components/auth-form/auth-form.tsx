import type { FieldValues, Path, UseFormRegister } from 'react-hook-form'

import AuthFormInput from '../auth-form-input'
import type { FormField } from '@models/forms/form-field'
import type { ChildrenProps } from '@models/children-props'

const AuthForm = <T extends FieldValues>({
  children,
  formFields,
  onSubmit,
  register
}: Props<T>) => (
  <form
    className='max-w-[350px] w-full flex flex-col items-center'
    onSubmit={onSubmit}
  >
    {formFields.map(({ name, validation, ...inputParameters }) => (
      <AuthFormInput
        key={name}
        register={register(name as Path<T>, {
          required: true,
          ...validation
        })}
        {...inputParameters}
      />
    ))}
    <input type='submit' className='hidden' />
    {children}
  </form>
)

export default AuthForm

interface Props<T extends FieldValues> extends ChildrenProps {
  register: UseFormRegister<T>
  formFields: FormField[]
  onSubmit: () => void
}
