import { FC, useContext } from 'react';
import { ConversionRateList } from '../../components/ConversionRateList/ConversionRateList';
import { OverviewSectionTrans } from '../../components/OverviewSectionTrans';
import { TotalCards } from '../../components/TotalCards/TotalCards';
import { ThemeContext } from '../../Providers/ThemeProvider';
import { Icon } from '../../ui/Icon/Icon';
import './Overview.scss';
import { OverviewSection } from './OverviewSection/OverviewSection';
import { useActionsBarOverview } from '../../hooks/useActionsBarOverview'

type TOverview = {
  title: string;
};

const widthActionBar = '63';

export const Overview: FC<TOverview> = ({ title }) => {
  const [theme] = useContext(ThemeContext);
  const { showItems, setShowItems } = useActionsBarOverview();

  return (
    <>
      <div className='main-title-wrapp overview-title-wrapp'>
        <h1 className='main-title'>{title}</h1>
        <Icon name='calendar' isWhite={theme === 'dark'} />
      </div>
      <div className='overview-inner'>
        <TotalCards widthActionBar={widthActionBar} />
        
        {showItems.includes('200') ? null : (
          <OverviewSection
          id='200'
          title='Conversion Rate to Naira'
          widthActionBar={widthActionBar}
        >
          <ConversionRateList />
        </OverviewSection>
        )}
        {showItems.includes('201') ? null : (
          <OverviewSectionTrans id='201' title='Transactions' setShowItems= {setShowItems} showItems={showItems}>
          Hi welcome, this page is the general overview section of the admin
          panel which you could edit and modify the view of the page to ya’
          preferred taste.
        </OverviewSectionTrans>
        )}
      </div>
    </>
  );
};
