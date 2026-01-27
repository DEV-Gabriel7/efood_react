import { useState, ChangeEvent } from 'react'

export function useForm<T>(initialData: T) {
  const [formData, setFormData] = useState<T>(initialData)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value, type } = e.target

    setFormData(prev => {
      const keys = id.split('.')
      const updateNested = (obj: any, keys: string[], value: any): any => {
        if (keys.length === 1) {
          return { ...obj, [keys[0]]: type === 'number' ? value : value }
        }
        const [current, ...rest] = keys
        return { ...obj, [current]: updateNested(obj[current], rest, value) }
      }
      return updateNested(prev, keys, value)
    })
  }

  const reset = () => setFormData(initialData)

  return { formData, handleChange, reset, setFormData }
}