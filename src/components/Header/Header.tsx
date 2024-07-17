import { useContext } from 'react'
import { ThemeContext } from '../../Providers/ThemeProvider'
import { CoinBase } from '../CoinBase/CoinBase'
import { Logo } from '../Logo/Logo';
import { Notifications } from '../Notifications/Notifications'
import { Search } from '../Search/Search';
import  './Header.scss';

export const Header = () => {
  const [theme] = useContext(ThemeContext);

  return (
    <header className='header'>
      <div className='headerWrapp'>
        <Logo title='CainBase' isDark={theme === 'dark'} />
        <div className='headerInner'>
          <Search placeholder='Search e.g card' size='lg' />
          <CoinBase title='CoinBase' isDark={theme === 'dark'} />
          <Notifications count='3'/>
        </div>
      </div>
    </header>
  );
};
