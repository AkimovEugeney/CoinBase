import { TotalCard } from './TotalCard/TotalCard';
import styles from './TotalCards.module.scss'
export const TotalCards = ({widthActionBar,actionsBarList}) => {
  return  (
    <ul className={styles.list}>
      <li><TotalCard widthActionBar= {widthActionBar} actionsBarList= {actionsBarList}/></li>
      <li><TotalCard widthActionBar= {widthActionBar} actionsBarList= {actionsBarList}/></li>
      <li><TotalCard widthActionBar= {widthActionBar} actionsBarList= {actionsBarList}/></li>
    </ul>
  )
}