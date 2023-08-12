import { UserInterface } from 'interfaces/user';
import { LessonInterface } from 'interfaces/lesson';
import { ExerciseInterface } from 'interfaces/exercise';
import { GetQueryInterface } from 'interfaces';

export interface ProgressInterface {
  id?: string;
  user_id?: string;
  lesson_id?: string;
  exercise_id?: string;
  progress_data: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  lesson?: LessonInterface;
  exercise?: ExerciseInterface;
  _count?: {};
}

export interface ProgressGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  lesson_id?: string;
  exercise_id?: string;
  progress_data?: string;
}
