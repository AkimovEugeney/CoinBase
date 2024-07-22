import { FC, useEffect, useState } from 'react';
import { ActionsBar } from '../../../components/ActionsBar/ActionsBar';
import { useActionsBarOverview } from '../../../hooks/useActionsBarOverview';
import './OverviewSection.scss';

interface IOverviewSectionProps {
  id: string;
  title: string;
  widthActionBar: string;
  children: React.ReactNode;
}

export const OverviewSection: FC<IOverviewSectionProps> = ({
  id,
  title,
  widthActionBar,
  children,
}) => {
  const { showItems, actionsBarList } = useActionsBarOverview();
  const [isShowItems, setIsShowItems] = useState(true);

  useEffect(() => {
    setIsShowItems(showItems.includes(id));
  }, [showItems, id]);

  if (isShowItems)  return null;

  return (
    <section className='section'>
      <div className='section-title-wrapp'>
        <h2 className='section-title'>{title}</h2>
        <ActionsBar
          id={id}
          style={{ right: '0', top: '50%', transform: 'translateY(-50%)' }}
          width={widthActionBar}
          list={actionsBarList}
        />
      </div>
      {children}
    </section>
  );
};
