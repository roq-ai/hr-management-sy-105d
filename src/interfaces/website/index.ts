import { LessonInterface } from 'interfaces/lesson';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface WebsiteInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  lesson?: LessonInterface[];
  user?: UserInterface;
  _count?: {
    lesson?: number;
  };
}

export interface WebsiteGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
