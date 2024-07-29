import { useMutation } from '@tanstack/react-query';
import { FC, useEffect, useState } from 'react';
import { queryClient } from '../../api/queryClient';
import {
  blockUser,
  deleteUser,
  TBlockUserParams,
  TGetUserProps,
  TUser,
} from '../../api/users';
import DeleteSVG from '../../assets/img/deleteIcon.svg?react';
import EditSVG from '../../assets/img/editIcon.svg?react';
import { useEditing } from '../../hooks/useEditing';
import { Checkbox } from '../../ui/Checkbox';
import { Error } from '../../ui/Error/Error';
import { Input } from '../../ui/Input';
import { Loader } from '../../ui/Loader';
import { Status } from '../../ui/Status';
import { ActionsBar } from '../ActionsBar';
import { UserView } from '../UserView';
import styles from './UserItem.module.scss';
import { colorStatus } from '../../utils/statusColor'

type TUserItemProps = {
  type: TGetUserProps;
  withCheckbox?: boolean;
  data: TUser;
  isChecked?: boolean;
};

export const UserItem: FC<TUserItemProps> = ({ type, withCheckbox, data, isChecked }) => {
  const [checked, setChecked] = useState(isChecked || false);
  const [isBlocked, setIsBlocked] = useState(data.block);

  useEffect(()=> {
    setChecked(isChecked || false);
  }, [isChecked])

  const userBlockMutation = useMutation(
    {
      mutationFn: blockUser,
    },
    queryClient
  );

  const userDeleteMutation = useMutation(
    {
      mutationFn: deleteUser,
      onSuccess() {
        queryClient.invalidateQueries({ queryKey: [type] });
      },
    },
    queryClient
  );

  function handleDelete() {
    userDeleteMutation.mutate(data.id);
  }

  function handleChecked() {
    setChecked(!checked);
  }

  

  const actionBarList = [
    { title: 'View', handleFn: () => console.log('View User') },
    {
      title: 'Block User',
      handleFn: () => {
        setIsBlocked(!isBlocked);
        const params: TBlockUserParams = {
          id: data.id,
          isBlocked: !isBlocked,
        };
        userBlockMutation.mutate(params);
        console.log(userBlockMutation.error?.message);
      },
    },
  ];

  const { nameState, emailState, edit, handleBlur } = useEditing(
    data.id,
    data.name,
    data.email,
    type
  );

  return (
    <div
      className={`item ${styles.item}  ${
        withCheckbox && !isBlocked ? styles.checkbox : ''
      } ${isBlocked ? styles.block : ''}`}
    >
      {withCheckbox && !isBlocked && (
        <Checkbox
          checked={checked}
          handleChecked={handleChecked}
          style={{ marginRight: '15px' }}
        />
      )}
      <Status
        style={{ marginRight: 'auto' }}
        title={isBlocked ? 'Blocked' : data.status}
        color={isBlocked? 'red' : colorStatus(data.status)}
      />
      <UserView
        style={{marginRight: '10px' }}
        data={data}
        nameState={nameState}
        edit={edit}
        handleBlur={handleBlur}
      />
      {edit.isEditing ? (
        <Input
          inputRef={emailState.emailRef}
          style={{ marginRight: 'auto'}}
          value={emailState.inputEmail}
          onChange={e => emailState.setInputEmail(e.currentTarget.value)}
          onBlur={() => handleBlur()}
        />
      ) : (
        <p className={styles.email} style={{ marginRight: 'auto' }}>
          {emailState.inputEmail}
        </p>
      )}
      {checked === true ? (
        <div className={styles.settings}>
          {userDeleteMutation.isError && (
            <Error title={userDeleteMutation.error.message} />
          )}
          {userDeleteMutation.isPending && <Loader />}
          <DeleteSVG onClick={handleDelete} />
          <EditSVG onClick={() => edit.setIsEditing(!edit.isEditing)} />
        </div>
      ) : (
        <ActionsBar style={{ right: '22px' }} width='73' list={actionBarList} />
      )}
    </div>
  );
};
