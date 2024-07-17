import { ActionsBar } from '../../ActionsBar/ActionsBar'
import styles from './TotalCard.module.scss'
import Total from '../../../assets/img/total.svg?react'

export const TotalCard = ({widthActionBar,actionsBarList}) => {
  return (
    <div className={styles.totalCard}>
      <Total className={styles.totalIcon} />
      <ActionsBar width= {widthActionBar} list={actionsBarList} style={{top: '22px', right: '22px'}}/>
    </div>
  )
}