import * as yup from 'yup';

export const lessonValidationSchema = yup.object().shape({
  name: yup.string().required(),
  content: yup.string().required(),
  website_id: yup.string().nullable(),
});
