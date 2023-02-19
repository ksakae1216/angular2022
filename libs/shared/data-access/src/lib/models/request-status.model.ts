export const RequestStatus = {
  Idle: 'idle',
  Pending: 'pending',
  Rejected: 'rejected',
  Succeeded: 'succeeded',
} as const;

export type RequestStatus = typeof RequestStatus[keyof typeof RequestStatus];
