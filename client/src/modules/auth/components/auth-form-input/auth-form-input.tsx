import type { UseFormRegisterReturn } from 'react-hook-form'

const AuthFormInput = <T extends string>({
  register,
  ...inputParameters
}: Props<T>) => (
  <input
    {...register}
    {...inputParameters}
    className='w-full drop-shadow-sm h-[44px] text-[16px] rounded-[8px] px-[10px] outline-0 mb-[8px]'
  />
)

export default AuthFormInput

interface Props<T extends string> {
  type: string
  placeholder: string
  register: UseFormRegisterReturn<T>
}
