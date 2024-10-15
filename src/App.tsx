import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SigninDto } from './interfaces/SigninDto';
import { CreateOtpDto } from './interfaces/CreateOtpDto';
import { GlobalStyle, Grid, Col, Row, H2, Paragraph, Input, Button, Toaster, Error } from './components';
import { postOtp, postSignin } from './axios/requests';

function App() {
  const [isContinuous, setIsContinuous] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [leftTime, setLeftTime] = useState<number>(60);
  const [codeResendAvailable, setCodeResendAvailable] = useState<boolean>(false);
  const { register, formState: { errors }, trigger, setValue, getValues, clearErrors, setError } = useForm();

  const Login = async () => {
    const isValid = await trigger('code') && await trigger('phone');
    if (isValid) {
      setIsLoading(true)
      try {
        const loginData: SigninDto = {phone: getValues('phone'), code: getValues('code')}
        const response = await postSignin({ params: loginData})
        toast.success(`Добро пожаловать! ${response.data.user.firstname || ''} ${response.data.user.middlename || ''} ${response.data.user.lastname || ''}`);
      }
      catch (error) {
        if (axios.isAxiosError(error)) {
          setError('code', {message: error.response?.data.reason})
        }
      }
      finally {
        setIsLoading(false)
      }
    }
  };

  const Continue = async () => {
    clearErrors('code')
    const isValid = await trigger('phone');
    if (isValid) {
      setIsLoading(true)
      const createOtpData: CreateOtpDto = {phone: getValues('phone')}
      await postOtp({ params: createOtpData })
      setIsContinuous(true);
      setLeftTime(60);
      setCodeResendAvailable(false);
      setIsLoading(false)
    }
  };

  useEffect(() => {
    if (leftTime > 0) {
      const timer = setTimeout(() => setLeftTime(leftTime - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCodeResendAvailable(true);

    }
  }, [isContinuous, leftTime]);

  return (
    <>
      <GlobalStyle />
      <Grid>
        <Col start={3} end={10} style={{ marginTop: 96 }}>
          <Row gap={24}>
            <Col end={8}><H2>Вход</H2></Col>
            <Col end={4}>
              <Paragraph variant='primary'>Введите {isContinuous ? 'проверочный код' : 'номер телефона'} для входа в личный кабинет</Paragraph>
            </Col>
            <Col end={4}>
              <Input
                type='number'
                placeholder='Телефон'
                hasError={!!errors.phone}
                {...register('phone', { required: true })}
                onChange={(e) => setValue('phone', e.target.value)}
              />
              {errors.phone && <Error>Поле является обязательным</Error>}
            </Col>

            {isContinuous && (
              <Col end={4}>
                <Input
                  type='number'
                  placeholder='Проверочный код'
                  hasError={!!errors.code}
                  {...register('code', {
                    required: true,
                    pattern: {value: /^\d{6}$/, message: "Код должен содержать ровно 6 цифр"}
                  })}
                  onChange={(e) => setValue('code', e.target.value)}
                />
                {errors.code && <Error>{errors.code?.message?.toString() || 'Код должен содержать 6 цифр'}</Error>}
              </Col>
            )}
            <Col end={3}>
              <Button loading={isLoading} variant='primary' onClick={isContinuous ? Login : Continue}>
                {isContinuous ? 'Войти' : 'Продолжить'}
              </Button>
            </Col>

            {isContinuous && (
              codeResendAvailable ? (
                <Col end={3}>
                  <Button variant='secondary' onClick={() => Continue()}>Запросить код еще раз</Button>
                </Col>
              ) : (
                <Col end={8}>
                  <Paragraph variant='secondary'>
                    Запросить код повторно можно будет через {leftTime} секунд
                  </Paragraph>
                </Col>
              )
            )}
          </Row>
        </Col>
      </Grid>
      <Toaster/>
    </>
  );
}

export default App;