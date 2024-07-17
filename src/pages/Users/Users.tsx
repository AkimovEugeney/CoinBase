import { FC } from 'react'

type TUsers = {
  title: string
}

export const Users: FC<TUsers> = ({title}) => {
  return (
    <h1>{title}</h1>
  )
}