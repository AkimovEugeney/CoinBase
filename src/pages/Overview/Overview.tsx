import { FC, useContext } from 'react'
import { Icon } from '../../components/Icon/Icon'
import { ThemeContext } from '../../Providers/ThemeProvider'

type TOverview = {
  title: string
}

export const Overview: FC<TOverview> = ({title}) => {
  const [theme] = useContext(ThemeContext)

  return (
    <div className='main-title-wrapp'>
      <h1 className='main-title'>{title}</h1>
      <Icon name='calendar' isWhite={theme === 'dark'}/>
    </div>
    
  )
}