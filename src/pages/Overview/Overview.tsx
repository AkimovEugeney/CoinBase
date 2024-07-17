import { FC, useContext } from 'react'
import { Icon } from '../../components/Icon/Icon'
import { ThemeContext } from '../../Providers/ThemeProvider'
import { TotalCards } from '../../components/TotalCards/TotalCards'
import { TActionBarList } from '../../components/ActionsBar/ActionsBar'

type TOverview = {
  title: string
}

const actionsBarList: TActionBarList[] = [
  {title: 'View'},
  {title: 'Delete'},
]


export const Overview: FC<TOverview> = ({title}) => {
  const [theme] = useContext(ThemeContext)

  return (
    <>
    <div className='main-title-wrapp'>
      <h1 className='main-title'>{title}</h1>
      <Icon name='calendar' isWhite={theme === 'dark'}/>
    </div>
    <TotalCards widthActionBar='63' actionsBarList={actionsBarList}/>
    </>
    
  )
}