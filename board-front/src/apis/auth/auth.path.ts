//! auth.path.ts

import { BASE } from "../common/base.path";

// 공통 prefix: path.ts에서는 prefix 상수를 한 개만 유지
const AUTH_PREFIX = `${BASE}/auth`;

// endpoint 정의
export const AUTH_PATH = {
  LOGIN: `${AUTH_PREFIX}/login`,
  LOGOUT: `${AUTH_PREFIX}/logout`,
  REFRESH: `${AUTH_PREFIX}/refresh`,
  SIGNPU: `${AUTH_PREFIX}/signup`,
  
  PASSWORD_RESET: `${AUTH_PREFIX}/password/reset`,
  PASSWORD_VERIFY: `${AUTH_PREFIX}/password/verify`,
}