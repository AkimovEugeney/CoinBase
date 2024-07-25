import { useQuery } from '@tanstack/react-query'
import { FC, useState } from 'react'
import { queryClient } from '../../api/queryClient'
import { getUsers, TGetUserProps } from '../../api/users'
import { Error } from '../../ui/Error/Error'
import { Loader } from '../../ui/Loader'
import { UserItem } from './../UserItem/UserItem'
import styles from './UserList.module.scss'
import { Checkbox } from '../../ui/Checkbox'

type TUserList = {
  type: TGetUserProps;
  withCheckbox: boolean;
  limit?: number;
};

export const UserList: FC<TUserList> = ({ limit = 9, type, withCheckbox }) => {
  const userQuery = useQuery(
    {
      queryFn: () => getUsers(type, 1, limit),
      queryKey: [type],
    },
    queryClient
  );

  let list: string[] = ['Account Status', 'User Name', 'Email', 'Action'];
  if (type === '/users-and-agents') {
    list = ['Payment Status', 'User/Agent', 'Email', 'Action'];
  }

  const [checked, setChecked] = useState(false);

  function handleChecked() {
    setChecked(!checked);
  }

  return (
    <div>
      <ul className={`${styles.headerList} ${withCheckbox ? styles.checkbox : ''}`}>
        {withCheckbox && <li><Checkbox checked={checked} handleChecked={handleChecked}/></li>}
      {list.map((item) => (
        <li key={item}>
          <h3>{item}</h3>
        </li>
      ))}
      </ul>
      {userQuery.isLoading && <div className='center'><Loader /></div>}
      {userQuery.isError && <div className='center'><Error title={userQuery.error.message} /></div>}
      {userQuery.isSuccess && (
        <ul className={styles.list}>
          {userQuery.data.data.map(user => (
            <UserItem
              key={user.id}
              data={user}
              withCheckbox={withCheckbox}
              type={type}
              isChecked={checked}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
