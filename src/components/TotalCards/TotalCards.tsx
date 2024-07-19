import { FC } from 'react';
import { TotalCard, TTotalCardProps } from './TotalCard';
import styles from './TotalCards.module.scss';
import { TTotalList } from '../../api/total'

interface ITotalCardProps extends TTotalCardProps{
  data: TTotalList
}

export const TotalCards: FC<ITotalCardProps> = ({
  data,
  widthActionBar,
  actionsBarList,
}) => {
  if (!data) {
    return null;
  }

  return (
    <ul className={styles.list}>
      {data.map(item => {
        return (
          <li key={item.title}>
            <TotalCard
              data={item}
              widthActionBar={widthActionBar}
              actionsBarList={actionsBarList}
            />
          </li>
        );
      })}
    </ul>
  );
};
