import { useState, useEffect } from 'react'

export const useValidation = <T,>(
  data: T,
  validator: (data: T) => string[]
) => {
  const [errors, setErrors] = useState<string[]>([])

  useEffect(() => {
    const validationErrors = validator(data)
    setErrors(validationErrors)
  }, [data, validator])

  return errors
}