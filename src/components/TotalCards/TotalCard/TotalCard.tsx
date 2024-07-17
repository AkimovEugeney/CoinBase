import { ActionsBar } from '../../ActionsBar/ActionsBar'
import styles from './TotalCard.module.scss'

export const TotalCard = () => {
  return (
    <div className={styles.totalCard}>
      <ActionsBar/>
    </div>
  )
}