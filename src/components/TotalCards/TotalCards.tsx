import { FC, useEffect, useRef, useState } from 'react';
import { TotalCard } from './TotalCard';
import styles from './TotalCards.module.scss';
import { useTotalList } from '../../hooks/useTotalList'
import { useActionsBarOverview } from '../../hooks/useActionsBarOverview'

type TTotalCardsProps = {
  widthActionBar: string;
}

function containsAll(arr1: string[], arr2: string[]): boolean {
  return arr2.every(item => arr1.includes(item));
}

export const TotalCards: FC<TTotalCardsProps> = ({
  widthActionBar,
}) => {
  const {showItems, actionsBarList} = useActionsBarOverview()
  const totalListQuery = useTotalList();
  const [items, setItems] = useState(totalListQuery.data ?? []);
  const [showList, setShowList] = useState(false);
  const listRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    if (totalListQuery.data) {
      setItems(totalListQuery.data);
    }
  }, [totalListQuery.data])

  useEffect(() => {
    setItems(items => items.filter(item => !showItems.includes(item.id)));
  }, [showItems])

  useEffect(() => {
    if( totalListQuery.data && showItems.length !== 0  ) {
      const idList: string[] = [];
      totalListQuery.data.forEach(item => idList.push(item.id))
      if (containsAll(showItems, idList)) {
        setShowList(true)
      }
    }
  }, [totalListQuery.data, showItems])


  if (showList) {
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
