import { FC, useEffect, useRef, useState } from 'react';
import { TotalCard } from './TotalCard';
import styles from './TotalCards.module.scss';
import { useTotalList } from '../../hooks/useTotalList'
import { TActionBarList } from '../ActionsBar'
import { isContainsAll } from '../../utils/isContainsAll'

type TTotalCardsProps = {
  widthActionBar: string;
  showItems: string[];
  actionsBarList: TActionBarList[];
}

export const TotalCards: FC<TTotalCardsProps> = ({
  widthActionBar,
  actionsBarList,
  showItems
}) => {
  const totalListQuery = useTotalList();
  const [items, setItems] = useState(totalListQuery.data ?? []);
  const [isShowList, setIsShowList] = useState(false);
  const listRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (totalListQuery.data) {
      setItems(totalListQuery.data);
    }
  }, [totalListQuery.data])

  useEffect(() => {
    setItems(items => items.filter(item => !showItems.includes(item.id)));
    if( totalListQuery.data && showItems.length !== 0  ) {
      const idList: string[] = [];
      totalListQuery.data.forEach(item => idList.push(item.id))
      if (isContainsAll(showItems, idList)) {
        setIsShowList(true)
      }
    }
  }, [totalListQuery.data, showItems])
  

  if (isShowList) {
    return null;
  }


  return (
    <ul ref={listRef} className={styles.list}>
      {items.map(item => {
        return (
          <li key={item.id}>
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
