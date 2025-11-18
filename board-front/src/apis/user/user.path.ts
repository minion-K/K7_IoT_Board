//! user.path.ts

const USER_PREFIX = '/users';

export const USER_PATH = {
  LIST: USER_PREFIX,
  // 동적 변수값은 반드시 함수로 작성
  DETAIL: (userId: number) => `${USER_PREFIX}/${userId}`,
  CREATE: USER_PREFIX
}