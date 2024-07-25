export type TStatusColor = 'green' | 'red' | 'gray' | 'gradient' | 'pomidoro' | 'red-night'

export function colorStatus(status: string): TStatusColor {
  switch (status) {
    case 'Active' || 'Processing' || 'Successful' || 'Completed':
      return 'green';
    case 'Down' :
      return 'red';
    case 'Decline' || 'Cancelled':
      return 'red-night';
    case 'Pending' || 'In Progress' || 'Paid':
      return 'gradient';
    case 'Processing':
      return 'gray';
    default:
      return 'pomidoro';
  }
}