import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { TActionBarList } from '../components/ActionsBar';

export const useActionsBarOverview = () => {
  const [showItems, setShowItems] = useState<string[]>([]);
  const [cookies, setCookie] = useCookies(['sections']);
  const handleDelete = (id: string) => {
    setShowItems([...showItems, id]);

    const options = {
      path: '/overview',
      expires: new Date(Date.now() + 3 * 86400e3),
    };
    setCookie('sections', [...showItems, id], options);
    
  };

  useEffect(() => {
    if (cookies.sections) {
      setShowItems([...cookies.sections]);
      console.log(showItems);
    }
  }, [cookies]);

  const actionsBarList: TActionBarList[] = [
    { title: 'View', handleFn: handleDelete },
    { title: 'Delete', handleFn: handleDelete },
  ];

  return { showItems, actionsBarList, setShowItems };
};
