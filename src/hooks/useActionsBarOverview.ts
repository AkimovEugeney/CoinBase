import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { TActionBarList } from '../components/ActionsBar'

export const useActionsBarOverview = () => {
  const [showItems, setShowItems] = useState<string[]>([]);
  const [cookies, setCookie] = useCookies(['sections'])
  const handleDelete = (id: string) => {
  setShowItems([...showItems, id]);
  }
  
  useEffect(() => {
   setShowItems(cookies.sections)
  }, []);
  
  useEffect(() => {
    const options = {
    path: '/overview',
    expires: new Date(Date.now() + 3 * 86400e3),
    }
    setCookie('sections', showItems, options);
  }, [showItems] );
  
  const actionsBarList: TActionBarList[] = [
  { title: 'View' , handleFn: handleDelete},
  { title: 'Delete', handleFn: handleDelete },
  ];
  
  return { showItems, actionsBarList, setShowItems }
}