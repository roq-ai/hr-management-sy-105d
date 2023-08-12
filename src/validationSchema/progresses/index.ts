import * as yup from 'yup';

export const progressValidationSchema = yup.object().shape({
  progress_data: yup.string().required(),
  user_id: yup.string().nullable(),
  lesson_id: yup.string().nullable(),
  exercise_id: yup.string().nullable(),
});
