import { FC, useContext } from 'react';
import { ConversionRateList } from '../../components/ConversionRateList/ConversionRateList';
import { OverviewSectionTrans } from '../../components/OverviewSectionTrans';
import { TotalCards } from '../../components/TotalCards/TotalCards';
import { UserList } from '../../components/UserList';
import { useActionsBarOverview } from '../../hooks/useActionsBarOverview';
import { ThemeContext } from '../../Providers/ThemeProvider';
import { Icon } from '../../ui/Icon/Icon';
import './Overview.scss';
import { OverviewSection } from './OverviewSection/OverviewSection';
import { Button } from '../../ui/Button/Button'

type TOverview = {
  title: string;
};

export const Overview: FC<TOverview> = ({ title }) => {
  const [theme] = useContext(ThemeContext);
  const { showItems, setShowItems, actionsBarList, isLoading } =
    useActionsBarOverview();
  const widthActionBar = '63';

  return (
    <>
      <div className='main-title-wrapp overview-title-wrapp'>
        <h1 className='main-title'>{title}</h1>
        <Icon name='calendar' isWhite={theme === 'dark'} />
      </div>
      <div className='overview-inner'>
        {isLoading ? null : (
          <TotalCards
            widthActionBar={widthActionBar}
            actionsBarList={actionsBarList}
            showItems={showItems}
          />
        )}

        {showItems.includes('200') || isLoading ? null : (
          <OverviewSection
            id='200'
            title='Conversion Rate to Naira'
            actionsBarList={actionsBarList}
            widthActionBar={widthActionBar}
          >
            <ConversionRateList />
          </OverviewSection>
        )}
        {showItems.includes('201') || isLoading ? null : (
          <OverviewSectionTrans
            id='201'
            title='Transactions'
            setShowItems={setShowItems}
            showItems={showItems}
          >
            Hi welcome, this page is the general overview section of the admin
            panel which you could edit and modify the view of the page to ya’
            preferred taste.
          </OverviewSectionTrans>
        )}
        {showItems.includes('204') || isLoading ? null : (
          <OverviewSection
            id='204'
            title='Users'
            actionsBarList={actionsBarList}
            widthActionBar={widthActionBar}
          >
            <UserList type='/users' withCheckbox={false} limit={5} currentPage={1}/>
            <div className='overview-btn-wrapp'><Button link='/users'>View More</Button></div>
          </OverviewSection>
        )}
        {showItems.includes('206') || isLoading ? null : (
          <OverviewSection
            id='206'
            title='Agents'
            actionsBarList={actionsBarList}
            widthActionBar={widthActionBar}
          >
            <UserList type='/agents' withCheckbox={false} limit={5} currentPage={1}/>
            <div className='overview-btn-wrapp'><Button link='/agents'>View More</Button></div>
          </OverviewSection>
        )}

        {showItems.includes('208') || isLoading ? null : (
          <OverviewSection
            id='208'
            title='Payments'
            actionsBarList={actionsBarList}
            widthActionBar={widthActionBar}
          >
            <UserList type='/users-and-agents' withCheckbox={false} limit={4} currentPage={1}/>
            <div className='overview-btn-wrapp'><Button link='/payments'>View More</Button></div>
          </OverviewSection>
        )}
      </div>
    </>
  );
};
