import { ExerciseInterface } from 'interfaces/exercise';
import { ProgressInterface } from 'interfaces/progress';
import { WebsiteInterface } from 'interfaces/website';
import { GetQueryInterface } from 'interfaces';

export interface LessonInterface {
  id?: string;
  name: string;
  content: string;
  website_id?: string;
  created_at?: any;
  updated_at?: any;
  exercise?: ExerciseInterface[];
  progress?: ProgressInterface[];
  website?: WebsiteInterface;
  _count?: {
    exercise?: number;
    progress?: number;
  };
}

export interface LessonGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  content?: string;
  website_id?: string;
}
