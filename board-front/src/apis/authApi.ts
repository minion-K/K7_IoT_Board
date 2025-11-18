import type { LoginRequest, LoginResponse } from "@/types/auth.type";
import { API_ROUTES } from "./common/apiMappingPattern";
import { publicApi } from "./common/axiosInstance";
import type { ApiResponse } from "@/types/ApiResponse";

export async function login(req: LoginRequest): Promise<LoginResponse> {
  const res = await publicApi.post<ApiResponse<LoginResponse>>(
    API_ROUTES.AUTH.LOGIN,
    req
  );

  return res.data.data;
}
