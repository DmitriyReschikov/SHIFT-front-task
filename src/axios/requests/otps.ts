import { CreateOtpDto } from "../../interfaces/CreateOtpDto";
import { api } from "../instance";

export type PostOtpParams = CreateOtpDto
export type PostOtpConfig = AxiosRequestConfig<PostOtpParams>;

export const postOtp = async ({ params, config }: PostOtpConfig) =>
    api.post('auth/otp', params, config)