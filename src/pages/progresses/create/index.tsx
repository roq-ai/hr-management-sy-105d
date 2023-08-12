import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createProgress } from 'apiSdk/progresses';
import { progressValidationSchema } from 'validationSchema/progresses';
import { UserInterface } from 'interfaces/user';
import { LessonInterface } from 'interfaces/lesson';
import { ExerciseInterface } from 'interfaces/exercise';
import { getUsers } from 'apiSdk/users';
import { getLessons } from 'apiSdk/lessons';
import { getExercises } from 'apiSdk/exercises';
import { ProgressInterface } from 'interfaces/progress';

function ProgressCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: ProgressInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createProgress(values);
      resetForm();
      router.push('/progresses');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<ProgressInterface>({
    initialValues: {
      progress_data: '',
      user_id: (router.query.user_id as string) ?? null,
      lesson_id: (router.query.lesson_id as string) ?? null,
      exercise_id: (router.query.exercise_id as string) ?? null,
    },
    validationSchema: progressValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Progresses',
              link: '/progresses',
            },
            {
              label: 'Create Progress',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Progress
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.progress_data}
            label={'Progress Data'}
            props={{
              name: 'progress_data',
              placeholder: 'Progress Data',
              value: formik.values?.progress_data,
              onChange: formik.handleChange,
            }}
          />

          <AsyncSelect<UserInterface>
            formik={formik}
            name={'user_id'}
            label={'Select User'}
            placeholder={'Select User'}
            fetcher={getUsers}
            labelField={'email'}
          />
          <AsyncSelect<LessonInterface>
            formik={formik}
            name={'lesson_id'}
            label={'Select Lesson'}
            placeholder={'Select Lesson'}
            fetcher={getLessons}
            labelField={'name'}
          />
          <AsyncSelect<ExerciseInterface>
            formik={formik}
            name={'exercise_id'}
            label={'Select Exercise'}
            placeholder={'Select Exercise'}
            fetcher={getExercises}
            labelField={'name'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/progresses')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'progress',
    operation: AccessOperationEnum.CREATE,
  }),
)(ProgressCreatePage);
