const mapping: Record<string, string> = {
  exercises: 'exercise',
  lessons: 'lesson',
  progresses: 'progress',
  users: 'user',
  websites: 'website',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
