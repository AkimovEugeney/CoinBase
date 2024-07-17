import  './Dashboard.scss'
import { DashboardLink } from './../DashboardLink/DashboardLink';
import { useContext, useState } from 'react'
import { ThemeContext } from '../../Providers/ThemeProvider'

const dashboardLinks = [
  {name: 'overview', title: 'Overview'},
  {name: 'users', title: 'Users'},
  {name: 'agents', title: 'Agents'},
  {name: 'cards', title: 'Cards', count: 10},
  {name: 'bitcoin', title: 'Bitcoin'},
  {name: 'payments', title: 'payments', count: 10},
  {name: 'transactions', title: 'Transactions'},
  {name: 'statistics', title: 'Statistics'},
  {name: 'logout', title: 'Logout'},
]



export const Dashboard = () => {
  const [activeLink, setActiveLink] = useState('');
  const [theme] = useContext(ThemeContext)

  const handleLinkClick = (name:string) => {
    setActiveLink(name);
  };

  return (
    <aside className='dashboard'>
      <div className='dashboardWrapp'> 
      {dashboardLinks.map((link) => {
        return <DashboardLink key={link.name} {...link} theme={theme} isActive={activeLink === link.name}
          handleClick={handleLinkClick}/>
      })}
      </div>
    </aside>
  )
}