import type { ValidationRule } from 'react-hook-form'

export interface UseFormRegisterValidation {
  min?: string | number
  max?: string | number
  maxLength?: number
  minLength?: number
  pattern?: ValidationRule<RegExp>
  required?: boolean
  disabled?: boolean
}
