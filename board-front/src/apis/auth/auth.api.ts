import type { LoginRequest, LoginResponse } from "@/types/auth.type";
import { API_ROUTES } from "../common/base.path";
import { publicApi } from "../common/axiosInstance";
import type { ApiResponse } from "@/types/common/ApiResponse";

export const authApi = {
  login: async (req: LoginRequest): Promise<LoginResponse> => {
    // axios.method<return type>();
    const res = await publicApi.post<ApiResponse<LoginResponse>>(
      API_ROUTES.AUTH.LOGIN,
      req
    );

    return res.data.data;
  },
};

// 로그인 요청
// export async function login(req: LoginRequest): Promise<LoginResponse> {
//   const res = await publicApi.post<ApiResponse<LoginResponse>>(
//     API_ROUTES.AUTH.LOGIN,
//     req
//   );

//   return res.data.data;
// }
