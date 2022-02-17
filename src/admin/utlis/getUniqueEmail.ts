import { IUser } from '@/interfaces';

export const getUniqueEmail = ({
  currentUserId,
  newEmail,
  userList,
}: {
  currentUserId: number;
  newEmail: string;
  userList: IUser[];
}) => {
  return userList.find(
    (item, id) => item.email === newEmail && id !== currentUserId
  );
};
