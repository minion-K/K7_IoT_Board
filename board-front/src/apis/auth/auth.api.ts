// auth.api.ts

import type { LoginRequest, LoginResponse } from "@/types/auth.type";
import { publicApi } from "../common/axiosInstance";
import type { ResponseDto } from "@/types/common/ResponseDto";
import { AUTH_PATH } from "./auth.path";

export const authApi = {
  login: async (req: LoginRequest): Promise<LoginResponse> => {
    // axios.메서드<메서드반환타입>();
    const res = await publicApi.post<ResponseDto<LoginResponse>>(
      AUTH_PATH.LOGIN,
      req
    );

    if (!res.data.data) {
      throw new Error("로그인 실패");
    }

    return res.data.data;
  },
};
