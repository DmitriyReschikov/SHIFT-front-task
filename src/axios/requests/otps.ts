import { api } from "../instance";

export type PostOtpParams = {phone: string}
export type PostOtpConfig = AxiosRequestConfig<PostOtpParams>;

export const postOtp = async ({ params, config }: PostOtpConfig) =>
    api.post('auth/otp', params, config)