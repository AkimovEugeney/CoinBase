import { ActionsBar } from '../../ActionsBar/ActionsBar'
import styles from './TotalCard.module.scss'

export const TotalCard = ({widthActionBar,actionsBarList}) => {
  return (
    <div className={styles.totalCard}>
      <ActionsBar width= {widthActionBar} list={actionsBarList} style={{top: '10px'}}/>
    </div>
  )
}