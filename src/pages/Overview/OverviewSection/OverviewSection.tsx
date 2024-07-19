import { FC } from 'react';
import {
  ActionsBar,
  TActionBarList,
} from '../../../components/ActionsBar/ActionsBar';
import './OverviewSection.scss';

interface IOverviewSectionProps {
  title: string;
  widthActionBar: string;
  actionBarList: TActionBarList[];
  children: React.ReactNode;
}

export const OverviewSection: FC<IOverviewSectionProps> = ({
  title,
  widthActionBar,
  actionBarList,
  children,
}) => {
  return (
    <section className='section'>
      <div className='section-title-wrapp'>
        <h2 className='section-title'>{title}</h2>
        <ActionsBar
          style={{ right: '0', top: '50%', transform: 'translateY(-50%)' }}
          width={widthActionBar}
          list={actionBarList}
        />
      </div>
      {children}
    </section>
  );
};