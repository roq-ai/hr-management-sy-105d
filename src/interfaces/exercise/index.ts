import { ProgressInterface } from 'interfaces/progress';
import { LessonInterface } from 'interfaces/lesson';
import { GetQueryInterface } from 'interfaces';

export interface ExerciseInterface {
  id?: string;
  name: string;
  content: string;
  lesson_id?: string;
  created_at?: any;
  updated_at?: any;
  progress?: ProgressInterface[];
  lesson?: LessonInterface;
  _count?: {
    progress?: number;
  };
}

export interface ExerciseGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  content?: string;
  lesson_id?: string;
}
