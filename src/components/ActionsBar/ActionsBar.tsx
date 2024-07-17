import { FC, HTMLAttributes, useEffect, useRef, useState } from 'react'
import styles from './ActionsBar.module.scss';


export type TActionBarList = {
  title: string;
  handleFn?: () => void;
}
interface IActionsBarProps extends HTMLAttributes<HTMLDivElement> {
  width: string;
  list: TActionBarList[];
}

export const ActionsBar: FC<IActionsBarProps> = ({width, list, ...props}) => {
  const [isActive, setIsActive] = useState(false);
  const actionBarRef = useRef<HTMLDivElement>(null);

  const handleActionBar = () => {
    setIsActive(!isActive)
  }

  const handleClickOutside = (e: MouseEvent) => {
    if (actionBarRef.current && !actionBarRef.current.contains(e.target as Node)) {
      setIsActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


  return (
    <div ref={actionBarRef} className={styles.actionBar} {...props}>
      <button onClick={handleActionBar} className={styles.actionBarBtn}>
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul style={{width: width + 'px'}} className={`${styles.actionBarList} ${isActive ? styles.active : ''}` }>
        {list.map((item) => {
          return (
            <li key={item.title}>
              <button onClick={item.handleFn}>{item.title}</button>
            </li>
          )
        })}
      </ul>
    </div>
  );
};
