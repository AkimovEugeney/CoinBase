import { Routes, Route, useLocation } from 'react-router-dom'
import './Main.scss'
import { Overview } from '../../pages/Overview/Overview'
import { useEffect, useState } from 'react'
import { Users } from '../../pages/Users/Users'
import { TotalCard } from '../TotalCards/TotalCard/TotalCard'

type TPages = {
  title: string
  path: string
  component: () => JSX.Element
}

const pages: TPages[] = [
  {title: 'Overview', path: '/overview', component: function () {return <Overview title={this.title}/>} },
  {title: 'Users', path: '/users', component: function () {return <Users title={this.title}/>} }
]

export const Main = () => {
  const location = useLocation()

  const [title, setTitle] = useState('')

  useEffect(() => {
    const page = pages.find(page => location.pathname.includes(page.path))
    if (page) {
      setTitle(page.title)
    }
  }, [location.pathname])

  return (
    <main className='main'>
      <div className='container'>
        {title && 
          <div className='main-head'>
            <h2 className='main-head__title'>Admin Management {title}</h2>
            <div className='main-head__wrapp'>
              <p>Accounts</p>
              <p>COINBASE</p>
            </div>
          </div>
        }
        <Routes>
          {pages.map((page) => {
            return <Route key={page.path} path={page.path} element={page.component()}/>
            })}
        </Routes>
      </div>
    </main>
  )
}