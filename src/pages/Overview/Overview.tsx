import { FC, useContext } from 'react';
import { TActionBarList } from '../../components/ActionsBar/ActionsBar';
import { ConversionRateList } from '../../components/ConversionRateList/ConversionRateList';
import { TotalCards } from '../../components/TotalCards/TotalCards';
import { useTotalList } from '../../hooks/useTotalList';
import { ThemeContext } from '../../Providers/ThemeProvider';
import { Icon } from '../../ui/Icon/Icon';
import './Overview.scss';
import { OverviewSection } from './OverviewSection/OverviewSection';

type TOverview = {
  title: string;
};

const actionsBarList: TActionBarList[] = [
  { title: 'View' },
  { title: 'Delete' },
];
const widthActionBar = '63';

export const Overview: FC<TOverview> = ({ title }) => {
  const [theme] = useContext(ThemeContext);
  const totalListQuery = useTotalList();
  return (
    <>
      <div className='main-title-wrapp overview-title-wrapp'>
        <h1 className='main-title'>{title}</h1>
        <Icon name='calendar' isWhite={theme === 'dark'} />
      </div>
      <div className='overview-inner'>
        <TotalCards
          data={totalListQuery.data}
          widthActionBar={widthActionBar}
          actionsBarList={actionsBarList}
        />
        <OverviewSection
          title='Conversion Rate to Naira'
          widthActionBar={widthActionBar}
          actionBarList={actionsBarList}
        >
          <ConversionRateList />
        </OverviewSection>
      </div>
    </>
  );
};
