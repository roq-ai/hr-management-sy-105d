import * as yup from 'yup';

export const exerciseValidationSchema = yup.object().shape({
  name: yup.string().required(),
  content: yup.string().required(),
  lesson_id: yup.string().nullable(),
});
