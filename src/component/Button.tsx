import React from 'react'

interface Props{
  children: string;
  color?: 'primary' | 'secondary';
  onclick: () => void;
}

const Button = ({children, onclick, color="primary" }: Props) => {
  return (
    <button className={'btn btn-' + color} onClick={onclick}>{children}</button>
  )
}

export default Button