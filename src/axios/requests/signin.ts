import { api } from "../instance";

export type PostSigninParams = {phone: string; code: number}
export type PostSigninConfig = AxiosRequestConfig<PostSigninParams>;

export const postSignin = async ({ params, config }: PostSigninConfig) =>
    api.post('users/signin', params, config)