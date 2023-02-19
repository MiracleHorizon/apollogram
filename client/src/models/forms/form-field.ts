import type { HTMLInputTypeAttribute } from 'react'

import type { UseFormRegisterValidation } from './use-form-register-validation'

export interface FormField {
  name: string
  type: HTMLInputTypeAttribute
  placeholder: string
  validation?: UseFormRegisterValidation
}
