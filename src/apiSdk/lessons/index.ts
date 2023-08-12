import axios from 'axios';
import queryString from 'query-string';
import { LessonInterface, LessonGetQueryInterface } from 'interfaces/lesson';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getLessons = async (query?: LessonGetQueryInterface): Promise<PaginatedInterface<LessonInterface>> => {
  const response = await axios.get('/api/lessons', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createLesson = async (lesson: LessonInterface) => {
  const response = await axios.post('/api/lessons', lesson);
  return response.data;
};

export const updateLessonById = async (id: string, lesson: LessonInterface) => {
  const response = await axios.put(`/api/lessons/${id}`, lesson);
  return response.data;
};

export const getLessonById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/lessons/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteLessonById = async (id: string) => {
  const response = await axios.delete(`/api/lessons/${id}`);
  return response.data;
};
