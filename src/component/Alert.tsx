import React, { ReactNode } from 'react'

interface Props{
  children: ReactNode;
}

export const Alert = ({children}: Props) => {
  return (
    <div className='alert alert-danger'>{children}</div>
  )
}
export default Alert;