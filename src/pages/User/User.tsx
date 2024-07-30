import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { queryClient } from '../../api/queryClient';
import { getUser } from '../../api/users';
import { UserView } from '../../components/UserView';
import { Error } from '../../ui/Error/Error';
import { Loader } from '../../ui/Loader';
import './User.scss';
import { Status } from '../../ui/Status'
import { colorStatus } from '../../utils/statusColor'
import { Button } from '../../ui/Button/Button'
import { useTotalList } from '../../hooks/useTotalList'
import { TotalCards } from '../../components/TotalCards'

export const User = () => {
  const { id } = useParams();

  const userQuery = useQuery(
    {
      queryKey: ['user', id],
      queryFn: () => getUser(id || ''),
      retry: 0,
    },
    queryClient
  );

  const totalListQuery = useTotalList('/total-user', 'totalListUser');

  return (
    <div className='user-wrapp'>
      <div className='main-title-wrapp overview-title-wrapp'>
        <h1 className='main-title'>Users</h1>
      </div>
      <div className='user-inner'>
        {userQuery.isLoading && <Loader />}
        {userQuery.error && <Error title={userQuery.error.message} />}
        {userQuery.isSuccess && (
          <div>
            <UserView size='lg' data={userQuery.data} />
            <p className='user-email'>{userQuery.data.email}</p>
            <div className='btn-wrapp'>
              <Status style={{width: '91px', height: '27px'}} title={userQuery.data.status} color={colorStatus(userQuery.data.status)}/>
              <Button size='sm'>Block User</Button>
            </div>
            {totalListQuery.error && <Error title={totalListQuery.error.message} />}
            {totalListQuery.isLoading && <Loader/>}
            {totalListQuery.isSuccess && <TotalCards gap='20px' data={totalListQuery.data}/>} 
          </div>
        )}
      </div>
    </div>
  );
};
