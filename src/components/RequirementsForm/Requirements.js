import '../../styles.css'
import { Requirement } from '../Requirement'
import { useCallback, useEffect } from 'react'

export const RequirementsForm = ({ value, requirements, onValidChange }) => {
  const validChangeCb = useCallback(onValidChange, [])

  useEffect(() => {
    validChangeCb(requirements.every((r) => r.validator(value)))
  }, [value, requirements, validChangeCb])

  return requirements.map((r, index) => (
    <Requirement
      key={index}
      value={value}
      requirement={r}
      onValidChange={onValidChange}
    />
  ))
}
