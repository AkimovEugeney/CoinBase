import axios from 'axios'
import { z } from 'zod'
import { API_URL } from './apiUrl'

export const TotalSchema = z.object({
  title: z.string(),
  count: z.string(),
  precent: z.number(),
  trend: z.boolean(),
})
export type TTotal = z.infer<typeof TotalSchema>

export const TotalListSchema = z.array(TotalSchema)
export type TTotalList = z.infer<typeof TotalListSchema>

export  const getTotalList = (): Promise<TTotalList> => {
  return axios.get(`${API_URL}/totals`)
  .then(res => res.data)
  .then(data => TotalListSchema.parse(data))
}