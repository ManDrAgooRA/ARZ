import { IRequestBodyAdmin } from '@/admin/interfaces';
import { IUser } from '.';

export type IRequestBody = IUser & IRequestBodyAdmin;
