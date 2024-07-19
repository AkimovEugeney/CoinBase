import { useQuery } from '@tanstack/react-query'
import { getTotalList } from '../api/total'
import { queryClient } from '../api/queryClient'

export const useTotalList = () => {
  const totalListQuery = useQuery({
    queryKey: ['totalList'],
    queryFn: getTotalList,
    retry: 0
  }, queryClient)

  return totalListQuery
}