import { CSSProperties, FC } from 'react';
import { TUser } from '../../api/users';
import { Input } from '../../ui/Input';
import styles from './UserView.module.scss';
import { TEdit, TNameState } from '../../hooks/useEditing'

type TUserViewProps = {
  data: TUser;
  nameState: TNameState;
  edit: TEdit;
  handleBlur: () => void;
  style?: CSSProperties;
};

export const UserView: FC<TUserViewProps> = ({
  data,
  nameState,
  edit,
  handleBlur,
  style,
}) => {
  return (
    <div className={styles.user} style={style}>
      <img className={styles.userImg} src={data.avatar} alt={data.name} />
      {edit.isEditing ? (
        <Input
          inputRef={nameState.nameRef}
          value={nameState.inputName}
          onChange={e => nameState.setInputName(e.currentTarget.value)}
          onBlur={() => handleBlur()}
          autoFocus
        />
      ) : (
        <p className={styles.userName}>
          {nameState.inputName}
          {data.role && <span className={styles.userRole}>{data.role}</span>}
        </p>
      )}
    </div>
  );
};
