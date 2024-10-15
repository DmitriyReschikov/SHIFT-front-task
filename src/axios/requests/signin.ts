import { SigninDto } from "../../interfaces/SigninDto";
import { api } from "../instance";

export type PostSigninParams = SigninDto
export type PostSigninConfig = AxiosRequestConfig<PostSigninParams>;

export const postSignin = async ({ params, config }: PostSigninConfig) =>
    api.post('users/signin', params, config)